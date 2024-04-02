from typing import List

import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Knowledge
from tests.helpers import helpers
from use_cases.knowledges import get_knowledges_use_case


@pytest.mark.asyncio
class TestGetKnowledgesUseCase:
    # TEST
    async def test_success(self) -> None:
        async def find_all_knowledges() -> List[Knowledge]:
            return [
                helpers.CreateDotDict(
                    {
                        "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                        "old_id": 1,
                        "name": "Knowledge 1",
                    }
                )
            ]

        repository = RepositoryMock()
        repository.knowledges.find_all = find_all_knowledges
        result = await get_knowledges_use_case(
            repository=repository,
        )
        assert result.get("knowledges") is not None
