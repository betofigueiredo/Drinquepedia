from typing import cast

import pytest  # noqa: F401
from fastapi import HTTPException
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from infrastructure.repositories.repository import Repository
from models import Highlight
from tests.helpers import helpers
from use_cases.highlights import get_highlight_use_case
from utils import Utils


@pytest.mark.asyncio
class TestGetHighlightUseCase:
    # TEST
    async def test_invalid_highlight_id(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = cast(Repository, RepositoryMock())
            utils = Utils()
            await get_highlight_use_case(
                highlight_id=None,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in detail.get("message", "")
        assert "highlight_id" in detail.get("message", "")

    # TEST
    async def test_hightlight_not_found(self) -> None:
        with pytest.raises(HTTPException) as err:

            async def find_highlight_by_id(highlight_id: int) -> Highlight | None:
                return None

            repository = cast(Repository, RepositoryMock())
            repository.highlights.find_by_id = find_highlight_by_id
            utils = Utils()
            await get_highlight_use_case(
                highlight_id=1,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 404
        assert detail.get("code") == "HIGHLIGHT_NOT_FOUND"
        assert detail.get("message") == "Highlight not found."

    # TEST
    async def test_success(self) -> None:
        async def find_highlight_by_id(highlight_id: int) -> Highlight | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Hightlight 1",
                }
            )

        repository = cast(Repository, RepositoryMock())
        repository.highlights.find_by_id = find_highlight_by_id
        utils = Utils()
        result = await get_highlight_use_case(
            highlight_id=1,
            utils=utils,
            repository=repository,
        )
        assert result.get("highlight") is not None
