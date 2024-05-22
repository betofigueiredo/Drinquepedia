from typing import List, Tuple

from models import Category, Drink, DrinkCategory, Ingredient, IngredientType
from sqlalchemy import asc, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload


async def find_all_drinks(
    session: AsyncSession,
    page: int,
    per_page: int,
    category: str | None,
    search: str | None,
    calories: str | None,
    alcoholic_content: str | None,
) -> Tuple[List[Drink], int]:
    list_query = select(Drink).options(selectinload(Drink.ingredients))
    count_query = select(func.count(Drink.id))

    if category:
        categories = (
            [category, "scaipirinhas"] if category == "caipirinhas" else [category]
        )
        list_query = list_query.where(
            Drink.categories.any(
                DrinkCategory.category.has(Category.name.in_(categories))
            )
        )
        count_query = count_query.where(
            Drink.categories.any(
                DrinkCategory.category.has(Category.name.in_(categories))
            )
        )
    else:
        categories_to_exclude = ["caipirinhas", "scaipirinhas"]
        list_query = list_query.where(
            ~Drink.categories.any(
                DrinkCategory.category.has(Category.name.in_(categories_to_exclude))
            )
        )
        count_query = count_query.where(
            ~Drink.categories.any(
                DrinkCategory.category.has(Category.name.in_(categories_to_exclude))
            )
        )

    if search:
        list_query = list_query.where(
            (
                Drink.ingredients.any(
                    Ingredient.ingredient_type.has(
                        IngredientType.name.like(f"%{search}%")
                    )
                )
            )
            | (Drink.name.like(f"%{search}%"))
        )
        count_query = count_query.where(
            (
                Drink.ingredients.any(
                    Ingredient.ingredient_type.has(
                        IngredientType.name.like(f"%{search}%")
                    )
                )
            )
            | (Drink.name.like(f"%{search}%"))
        )

    if calories:
        list_query = list_query.where(Drink.calories >= calories.split("-")[0])
        count_query = count_query.where(Drink.calories >= calories.split("-")[0])
        if calories.split("-")[1]:
            list_query = list_query.where(Drink.calories <= calories.split("-")[1])
            count_query = count_query.where(Drink.calories <= calories.split("-")[1])

    if alcoholic_content:
        list_query = list_query.where(Drink.alcoholic_content == alcoholic_content)
        count_query = count_query.where(Drink.alcoholic_content == alcoholic_content)

    list_query = (
        list_query.order_by(asc(Drink.name))
        .limit(per_page)
        .offset((page - 1) * per_page)
    )

    drinks = await session.scalars(list_query)
    total_count = await session.scalar(count_query) or 0

    return list(drinks), total_count
