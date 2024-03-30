from custom_types import ErrorResponse, GetInstructionsResponse
from infrastructure.repositories.repository import Repository


async def get_instructions_use_case(
    repository: Repository,
) -> GetInstructionsResponse | ErrorResponse:
    instructions = await repository.instructions.find_all()
    return {"instructions": instructions}
