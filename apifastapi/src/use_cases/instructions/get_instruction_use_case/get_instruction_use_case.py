from typing import Tuple

from custom_types import ErrorResponse, GetInstructionResponse
from infrastructure.repositories.repository import Repository
from schemas import InstructionSchema
from utils import Utils

from .schema import Validation


def get_instruction_use_case(
    instruction_id: str | None,
    utils: Utils,
    repository: Repository,
) -> Tuple[GetInstructionResponse | ErrorResponse, int]:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"instruction_id": instruction_id},
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    instruction = repository.instructions.find_by_id(
        instruction_id=fields.instruction_id
    )

    if not instruction:
        return {
            "code": "INSTRUCTION_NOT_FOUND",
            "message": "Instruction not found.",
        }, 404

    response: GetInstructionResponse = {
        "instruction": InstructionSchema().dump(instruction)
    }

    return response, 200
