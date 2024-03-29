from typing import Optional

from custom_types import ErrorResponse, GetDrinkResponse, GetDrinksResponse
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_db_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.drinks import get_drink_use_case, get_drinks_use_case
from utils import Utils

router = APIRouter(prefix="/drinks", tags=["drinks"])


@router.get("/", response_model=GetDrinksResponse)
async def get_drinks(
    page: int,
    per_page: int,
    category: Optional[str] = None,
    name: Optional[str] = None,
    calories: Optional[str] = None,
    ingredient_type: Optional[str] = None,
    alcoholic_content: Optional[str] = None,
    db_session: AsyncSession = Depends(get_db_session),
) -> GetDrinksResponse | ErrorResponse:
    response = await get_drinks_use_case(
        query_params={
            "page": page,
            "per_page": per_page,
            "category": category,
            "name": name,
            "calories": calories,
            "ingredient_type": ingredient_type,
            "alcoholic_content": alcoholic_content,
        },
        utils=Utils(),
        repository=Repository(db_session),
    )
    return response


@router.get("/{drink_id}", response_model=GetDrinkResponse)
async def publish_article(
    drink_id: str,
    db_session: AsyncSession = Depends(get_db_session),
) -> GetDrinkResponse | ErrorResponse:
    response = await get_drink_use_case(
        drink_id=drink_id,
        utils=Utils(),
        repository=Repository(db_session),
    )
    return response
