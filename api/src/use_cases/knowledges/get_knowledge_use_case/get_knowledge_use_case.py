from custom_types import ErrorResponse, GetKnowledgeResponse
from fastapi import HTTPException, status
from infrastructure.repositories.repository import Repository
from utils import Utils

from .schema import Validation


async def get_knowledge_use_case(
    knowledge_slug: str | None,
    utils: Utils,
    repository: Repository,
) -> GetKnowledgeResponse | ErrorResponse:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"knowledge_slug": knowledge_slug},
    )

    if error:
        raise HTTPException(
            detail={
                "code": "INVALID_DATA",
                "message": f"{error.message}: {error.field}",
            },
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    knowledge = await repository.knowledges.find_by_id(
        knowledge_slug=fields.knowledge_slug
    )

    if not knowledge:
        raise HTTPException(
            detail={
                "code": "KNOWLEDGE_NOT_FOUND",
                "message": "Knowledge not found.",
            },
            status_code=status.HTTP_404_NOT_FOUND,
        )

    return {"knowledge": knowledge}
