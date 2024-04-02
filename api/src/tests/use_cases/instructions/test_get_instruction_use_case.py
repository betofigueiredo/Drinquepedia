from typing import cast

import pytest  # noqa: F401
from fastapi import HTTPException
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Instruction
from tests.helpers import helpers
from use_cases.instructions import get_instruction_use_case
from utils import Utils


@pytest.mark.asyncio
class TestGetInstructionUseCase:
    # TEST
    async def test_invalid_instruction_id(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            await get_instruction_use_case(
                instruction_id=None,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in detail.get("message", "")
        assert "instruction_id" in detail.get("message", "")

    # TEST
    async def test_instruction_not_found(self) -> None:
        with pytest.raises(HTTPException) as err:

            async def find_instruction_by_id(instruction_id: int) -> Instruction | None:
                return None

            repository = RepositoryMock()
            repository.instructions.find_by_id = find_instruction_by_id
            utils = Utils()
            await get_instruction_use_case(
                instruction_id=1,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 404
        assert detail.get("code") == "INSTRUCTION_NOT_FOUND"
        assert detail.get("message") == "Instruction not found."

    # TEST
    async def test_success(self) -> None:
        async def find_instruction_by_id(instruction_id: int) -> Instruction | None:
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
        result = await get_instruction_use_case(
            instruction_id=1,
            utils=utils,
            repository=repository,
        )
        assert result.get("instruction") is not None
