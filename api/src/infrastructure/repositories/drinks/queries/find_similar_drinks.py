from typing import List

from models import Category, Drink, DrinkCategory, Ingredient, IngredientType
from sqlalchemy import func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


async def find_similar_drinks(
    session: AsyncSession,
    drink_id: int,
    categories: List[str],
    ingredients: List[str],
) -> List[Drink]:
    list_query = (
        select(Drink)
        .options(selectinload(Drink.categories))
        .options(selectinload(Drink.ingredients))
        .options(selectinload(Drink.instructions))
        .where(
            (
                Drink.categories.any(
                    DrinkCategory.category.has(Category.name.in_(categories))
                )
            )
            & (
                Drink.ingredients.any(
                    Ingredient.ingredient_type.has(IngredientType.name.in_(ingredients))
                )
            )
            & (Drink.old_id != drink_id)
        )
        .order_by(func.rand())
        .limit(5)
    )
    drinks = await session.scalars(list_query)
    return list(drinks)
