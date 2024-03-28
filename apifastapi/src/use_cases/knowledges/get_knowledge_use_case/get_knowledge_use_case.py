from typing import Tuple

from custom_types import ErrorResponse, GetKnowledgeResponse
from infrastructure.repositories.repository import Repository
from schemas import KnowledgeSchema
from utils import Utils

from .schema import Validation


def get_knowledge_use_case(
    knowledge_slug: str | None,
    utils: Utils,
    repository: Repository,
) -> Tuple[GetKnowledgeResponse | ErrorResponse, int]:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"knowledge_slug": knowledge_slug},
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    knowledge = repository.knowledges.find_by_id(knowledge_slug=fields.knowledge_slug)

    if not knowledge:
        return {
            "code": "KNOWLEDGE_NOT_FOUND",
            "message": "Knowledge not found.",
        }, 404

    response: GetKnowledgeResponse = {"knowledge": KnowledgeSchema().dump(knowledge)}

    return response, 200
