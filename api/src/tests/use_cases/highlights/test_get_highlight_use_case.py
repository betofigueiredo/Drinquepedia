import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Highlight
from tests.helpers import helpers
from use_cases.highlights import get_highlight_use_case
from utils import Utils


class TestGetHighlightUseCase:
    # TEST
    def test_invalid_highlight_id(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        result = get_highlight_use_case(
            highlight_id=None,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in result[0].get("message")
        assert "highlight_id" in result[0].get("message")

    # TEST
    def test_hightlight_not_found(self) -> None:
        def find_highlight_by_id(highlight_id: int) -> Highlight | None:
            return None

        repository = RepositoryMock()
        repository.highlights.find_by_id = find_highlight_by_id
        utils = Utils()
        result = get_highlight_use_case(
            highlight_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "HIGHLIGHT_NOT_FOUND"
        assert result[0].get("message") == "Highlight not found."

    # TEST
    def test_success(self) -> None:
        def find_highlight_by_id(highlight_id: int) -> Highlight | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Hightlight 1",
                }
            )

        repository = RepositoryMock()
        repository.highlights.find_by_id = find_highlight_by_id
        utils = Utils()
        result = get_highlight_use_case(
            highlight_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("highlight") is not None
        assert result[1] == 200
