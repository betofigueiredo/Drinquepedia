from typing import List

import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Highlight
from tests.helpers import helpers
from use_cases.highlights import get_highlights_use_case


@pytest.mark.asyncio
class TestGetHighlightsUseCase:
    # TEST
    async def test_success(self) -> None:
        async def find_all_highlights() -> List[Highlight]:
            return [
                helpers.CreateDotDict(
                    {
                        "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                        "old_id": 1,
                        "name": "Hightlight 1",
                    }
                )
            ]

        repository = RepositoryMock()
        repository.highlights.find_all = find_all_highlights
        result = await get_highlights_use_case(repository=repository)
        assert result.get("highlights") is not None
