import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Instruction
from tests.helpers import helpers
from use_cases.instructions import get_instruction_use_case
from utils import Utils


class TestGetInstructionUseCase:
    # TEST
    def test_invalid_instruction_id(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        result = get_instruction_use_case(
            instruction_id=None,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in result[0].get("message")
        assert "instruction_id" in result[0].get("message")

    # TEST
    def test_instruction_not_found(self) -> None:
        def find_instruction_by_id(instruction_id: int) -> Instruction | None:
            return None

        repository = RepositoryMock()
        repository.instructions.find_by_id = find_instruction_by_id
        utils = Utils()
        result = get_instruction_use_case(
            instruction_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INSTRUCTION_NOT_FOUND"
        assert result[0].get("message") == "Instruction not found."

    # TEST
    def test_success(self) -> None:
        def find_instruction_by_id(instruction_id: int) -> Instruction | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Instruction 1",
                }
            )

        repository = RepositoryMock()
        repository.instructions.find_by_id = find_instruction_by_id
        utils = Utils()
        result = get_instruction_use_case(
            instruction_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("instruction") is not None
        assert result[1] == 200
