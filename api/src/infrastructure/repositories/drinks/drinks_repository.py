from typing import List, Tuple

from infrastructure.repositories.drinks.queries import (
    find_all_drinks,
    find_drink_by_id,
    find_similar_drinks,
)
from models import Drink
from sqlalchemy.ext.asyncio import AsyncSession


class DrinksRepository:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def find_all(
        self,
        page: int,
        per_page: int,
        category: str | None,
        name: str | None,
        calories: str | None,
        ingredient_type: str | None,
        alcoholic_content: str | None,
    ) -> Tuple[List[Drink], int]:
        return await find_all_drinks(
            db_session=self.db_session,
            page=page,
            per_page=per_page,
            category=category,
            name=name,
            calories=calories,
            ingredient_type=ingredient_type,
            alcoholic_content=alcoholic_content,
        )

    async def find_by_id(self, drink_id: int) -> Drink | None:
        return await find_drink_by_id(db_session=self.db_session, drink_id=drink_id)

    async def find_similar(
        self, categories: List[int], ingredients: List[str]
    ) -> List[Drink]:
        return await find_similar_drinks(
            db_session=self.db_session, categories=categories, ingredients=ingredients
        )
