from fastapi import APIRouter, Depends
from infrastructure.core.database import get_db_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.drinks.get_drinks_use_case.get_drinks_use_case import get_drinks_use_case
from utils import Utils

router = APIRouter(prefix="/drinks", tags=["drinks"])


# def get(self) -> Tuple[GetDrinksResponse | ErrorResponse, int]:
# @router.get("/", response_model=dict[str, List[ArticleSchema]])
@router.get("/")
async def get_drinks(
    db_session: AsyncSession = Depends(get_db_session),
):
    response = await get_drinks_use_case(
        query_params={},
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
