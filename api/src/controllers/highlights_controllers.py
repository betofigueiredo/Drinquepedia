from custom_types import ErrorResponse, GetHighlightResponse, GetHighlightsResponse
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.highlights import get_highlight_use_case, get_highlights_use_case
from utils import Utils

router = APIRouter(prefix="/highlights", tags=["highlights"])


@router.get("/", response_model=GetHighlightsResponse)
async def get_highlights(
    session: AsyncSession = Depends(get_session),
) -> GetHighlightsResponse | ErrorResponse:
    return await get_highlights_use_case(
        repository=Repository(session),
    )


@router.get("/{highlight_id}", response_model=GetHighlightResponse)
async def get_highlight(
    highlight_id: str,
    session: AsyncSession = Depends(get_session),
) -> GetHighlightResponse | ErrorResponse:
    return await get_highlight_use_case(
        highlight_id=highlight_id,
        utils=Utils(),
        repository=Repository(session),
    )
