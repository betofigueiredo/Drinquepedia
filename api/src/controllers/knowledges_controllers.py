from custom_types import ErrorResponse, GetKnowledgeResponse, GetKnowledgesResponse
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.knowledges import get_knowledge_use_case, get_knowledges_use_case
from utils import Utils

router = APIRouter(prefix="/knowledges", tags=["knowledges"])


@router.get("/", response_model=GetKnowledgesResponse)
async def get_knowledges(
    session: AsyncSession = Depends(get_session),
) -> GetKnowledgesResponse | ErrorResponse:
    return await get_knowledges_use_case(
        repository=Repository(session),
    )


@router.get("/{knowledge_slug}", response_model=GetKnowledgeResponse)
async def get_knowledge(
    knowledge_slug: str,
    session: AsyncSession = Depends(get_session),
) -> GetKnowledgeResponse | ErrorResponse:
    return await get_knowledge_use_case(
        knowledge_slug=knowledge_slug,
        utils=Utils(),
        repository=Repository(session),
    )
