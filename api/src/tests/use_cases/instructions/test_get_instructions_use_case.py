from typing import List

import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Instruction
from tests.helpers import helpers
from use_cases.instructions import get_instructions_use_case


class TestGetInstructionsUseCase:
    # TEST
    def test_success(self) -> None:
        def find_all_instructions() -> List[Instruction]:
            return [
                helpers.CreateDotDict(
                    {
                        "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                        "old_id": 1,
                        "name": "Instruction 1",
                    }
                )
            ]

        repository = RepositoryMock()
        repository.instructions.find_all = find_all_instructions
        result = get_instructions_use_case(
            repository=repository,
        )
        assert result[0].get("instructions") is not None
        assert result[1] == 200
