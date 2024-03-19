from typing import Tuple

from custom_types import ErrorResponse, GetKnowledgesResponse
from infrastructure.repositories.repository import Repository
from schemas import KnowledgeSchema


def get_knowledges_use_case(
    repository: Repository,
) -> Tuple[GetKnowledgesResponse | ErrorResponse, int]:
    knowledges = repository.knowledges.find_all()

    response: GetKnowledgesResponse = {
        "knowledges": [KnowledgeSchema().dump(knowledge) for knowledge in knowledges],
    }

    return response, 200
