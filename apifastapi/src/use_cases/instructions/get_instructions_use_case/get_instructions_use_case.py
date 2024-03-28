from typing import Tuple

from custom_types import ErrorResponse, GetInstructionsResponse
from infrastructure.repositories.repository import Repository
from schemas import InstructionSchema


def get_instructions_use_case(
    repository: Repository,
) -> Tuple[GetInstructionsResponse | ErrorResponse, int]:
    instructions = repository.instructions.find_all()

    response: GetInstructionsResponse = {
        "instructions": [
            InstructionSchema().dump(instruction) for instruction in instructions
        ],
    }

    return response, 200
