from custom_types import ErrorResponse, GetKnowledgesResponse
from infrastructure.repositories.repository import Repository


async def get_knowledges_use_case(
    repository: Repository,
) -> GetKnowledgesResponse | ErrorResponse:
    knowledges = await repository.knowledges.find_all()

    return {"knowledges": knowledges}
