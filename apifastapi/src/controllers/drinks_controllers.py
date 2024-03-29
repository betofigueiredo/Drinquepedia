from typing import Optional

from custom_types import GetDrinksResponse
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_db_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.drinks.get_drinks_use_case.get_drinks_use_case import get_drinks_use_case
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
) -> GetDrinksResponse:
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


# @router.get("/{article_id}/publish", response_model=dict[str, ArticleSchema])
# async def publish_article(
#     article_id: str,
#     db_session: AsyncSession = Depends(get_db_session),
# ) -> dict[str, Article]:
#     response: dict[str, Article] = await publish_article_use_case(
#         user_id="e558cff4-3266-4d15-9bc9-b1d2dc73fd09",
#         article_id=article_id,
#         utils=Utils(),
#         repository=Repository(db_session),
#     )
#     return response
