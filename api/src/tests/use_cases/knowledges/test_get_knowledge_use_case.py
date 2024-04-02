from typing import cast

import pytest  # noqa: F401
from fastapi import HTTPException
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Knowledge
from tests.helpers import helpers
from use_cases.knowledges import get_knowledge_use_case
from utils import Utils


@pytest.mark.asyncio
class TestGetKnowledgeUseCase:
    # TEST
    async def test_invalid_knowledge_id(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            await get_knowledge_use_case(
                knowledge_slug=None,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid string" in detail.get("message", "")
        assert "knowledge_slug" in detail.get("message", "")

    # TEST
    async def test_knowledge_not_found(self) -> None:
        with pytest.raises(HTTPException) as err:

            async def find_knowledge_by_id(knowledge_slug: int) -> Knowledge | None:
                return None

            repository = RepositoryMock()
            repository.knowledges.find_by_id = find_knowledge_by_id
            utils = Utils()
            await get_knowledge_use_case(
                knowledge_slug="copos",
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 404
        assert detail.get("code") == "KNOWLEDGE_NOT_FOUND"
        assert detail.get("message") == "Knowledge not found."

    # TEST
    async def test_success(self) -> None:
        async def find_knowledge_by_id(knowledge_slug: int) -> Knowledge | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Knowledge 1",
                }
            )

        repository = RepositoryMock()
        repository.knowledges.find_by_id = find_knowledge_by_id
        utils = Utils()
        result = await get_knowledge_use_case(
            knowledge_slug="copos",
            utils=utils,
            repository=repository,
        )
        assert result.get("knowledge") is not None
