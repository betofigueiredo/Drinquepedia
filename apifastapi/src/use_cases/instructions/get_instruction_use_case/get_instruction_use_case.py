from custom_types import ErrorResponse, GetInstructionResponse
from fastapi import HTTPException, status
from infrastructure.repositories.repository import Repository
from utils import Utils

from .schema import Validation


async def get_instruction_use_case(
    instruction_id: str | None,
    utils: Utils,
    repository: Repository,
) -> GetInstructionResponse | ErrorResponse:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"instruction_id": instruction_id},
    )

    if error:
        raise HTTPException(
            detail={
                "code": "INVALID_DATA",
                "message": f"{error.message}: {error.field}",
            },
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    instruction = await repository.instructions.find_by_id(
        instruction_id=fields.instruction_id
    )

    if not instruction:
        raise HTTPException(
            detail={
                "code": "INSTRUCTION_NOT_FOUND",
                "message": "Instruction not found.",
            },
            status_code=status.HTTP_404_NOT_FOUND,
        )

    return {"instruction": instruction}
