from typing import Optional

from custom_types import (
    ErrorResponse,
    GetDrinkResponse,
    GetDrinksResponse,
    GetSimilarDrinksResponse,
)
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.drinks import (
    get_drink_use_case,
    get_drinks_use_case,
    get_similar_drinks_use_case,
)
from utils import Utils

router = APIRouter(prefix="/drinks", tags=["drinks"])


@router.get("/", response_model=GetDrinksResponse)
async def get_drinks(
    page: str,
    per_page: str,
    category: Optional[str] = None,
    search: Optional[str] = None,
    calories: Optional[str] = None,
    alcoholic_content: Optional[str] = None,
    session: AsyncSession = Depends(get_session),
) -> GetDrinksResponse | ErrorResponse:
    return await get_drinks_use_case(
        query_params={
            "page": page,
            "per_page": per_page,
            "category": category,
            "search": search,
            "calories": calories,
            "alcoholic_content": alcoholic_content,
        },
        utils=Utils(),
        repository=Repository(session),
    )


@router.get("/{drink_id}", response_model=GetDrinkResponse)
async def get_drink(
    drink_id: str,
    session: AsyncSession = Depends(get_session),
) -> GetDrinkResponse | ErrorResponse:
    return await get_drink_use_case(
        drink_id=drink_id,
        utils=Utils(),
        repository=Repository(session),
    )


@router.get("/{drink_id}/similar", response_model=GetSimilarDrinksResponse)
async def get_similar_drinks(
    drink_id: str,
    session: AsyncSession = Depends(get_session),
) -> GetSimilarDrinksResponse | ErrorResponse:
    return await get_similar_drinks_use_case(
        drink_id=drink_id,
        utils=Utils(),
        repository=Repository(session),
    )
