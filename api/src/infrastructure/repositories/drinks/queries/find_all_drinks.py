from typing import List, Tuple

from flask_sqlalchemy import SQLAlchemy
from models import Category, Drink, DrinkCategory, Ingredient, IngredientType
from sqlalchemy import asc, func


def find_all_drinks(
    db: SQLAlchemy,
    page: int,
    per_page: int,
    category: str | None,
    name: str | None,
    calories: str | None,
    ingredient_type: str | None,
    alcoholic_content: str | None,
) -> Tuple[List[Drink], int]:
    list_query = db.select(Drink)
    count_query = db.session.query(func.count(Drink.id))

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

    if ingredient_type:
        list_query = list_query.join(Ingredient.ingredient_type).where(
            IngredientType.name.like(f"%{ingredient_type}%")
        )
        count_query = count_query.join(Ingredient.ingredient_type).where(
            IngredientType.name.like(f"%{ingredient_type}%")
        )

    if name:
        list_query = list_query.where(Drink.name.like(f"%{name}%"))
        count_query = count_query.where(Drink.name.like(f"%{name}%"))

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

    drinks = db.session.scalars(list_query)
    total_count = count_query.scalar()

    return list(drinks), total_count
