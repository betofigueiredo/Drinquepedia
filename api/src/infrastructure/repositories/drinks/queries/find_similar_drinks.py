from typing import List

from models import Category, Drink, DrinkCategory, Ingredient, IngredientType
from sqlalchemy import func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


async def find_similar_drinks(
    db_session: AsyncSession,
    categories: List[str],
    ingredients: List[str],
) -> List[Drink]:
    async with db_session as session:
        list_query = (
            select(Drink)
            .options(selectinload(Drink.categories))
            .options(selectinload(Drink.ingredients))
            .where(
                Drink.categories.any(
                    DrinkCategory.category.has(Category.name.in_(categories))
                )
            )
            .where(
                Drink.ingredients.any(
                    Ingredient.ingredient_type.has(IngredientType.name.in_(ingredients))
                )
            )
            .order_by(func.rand())
            .limit(5)
        )

        drinks = await session.scalars(list_query)
        return list(drinks)
