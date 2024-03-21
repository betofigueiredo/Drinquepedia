import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Knowledge
from tests.helpers import helpers
from use_cases.knowledges import get_knowledge_use_case
from utils import Utils


class TestGetKnowledgeUseCase:
    # TEST
    def test_invalid_knowledge_id(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        result = get_knowledge_use_case(
            knowledge_slug=None,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid string" in result[0].get("message")
        assert "knowledge_slug" in result[0].get("message")

    # TEST
    def test_knowledge_not_found(self) -> None:
        def find_knowledge_by_id(knowledge_slug: int) -> Knowledge | None:
            return None

        repository = RepositoryMock()
        repository.knowledges.find_by_id = find_knowledge_by_id
        utils = Utils()
        result = get_knowledge_use_case(
            knowledge_slug="copos",
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "KNOWLEDGE_NOT_FOUND"
        assert result[0].get("message") == "Knowledge not found."

    # TEST
    def test_success(self) -> None:
        def find_knowledge_by_id(knowledge_slug: int) -> Knowledge | None:
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
        result = get_knowledge_use_case(
            knowledge_slug="copos",
            utils=utils,
            repository=repository,
        )
        assert result[0].get("knowledge") is not None
        assert result[1] == 200
