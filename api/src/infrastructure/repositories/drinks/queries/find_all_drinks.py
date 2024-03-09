from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Drink, Ingredient, IngredientType
from sqlalchemy import asc


def find_all_drinks(
    db: SQLAlchemy,
    page: int,
    per_page: int,
    name: str | None,
    calories: str | None,
    ingredient_type: str | None,
    alcoholic_content: str | None,
) -> List[Drink]:
    query = db.select(Drink)

    if ingredient_type:
        query = query.join(Ingredient.ingredient_type).where(
            IngredientType.name.like(f"%{ingredient_type}%")
        )

    if name:
        query = query.where(Drink.name.like(f"%{name}%"))

    if calories:
        query = query.where(Drink.calories >= calories.split("-")[0])
        query = query.where(
            Drink.calories <= calories.split("-")[1] if calories.split("-")[1] else True
        )

    if alcoholic_content:
        query = query.where(Drink.alcoholic_content == alcoholic_content)

    query = (
        query.order_by(asc(Drink.name)).limit(per_page).offset((page - 1) * per_page)
    )

    print(" ", flush=True)
    print(" ", flush=True)
    print(query, flush=True)
    print(" ", flush=True)
    print(" ", flush=True)
    drinks = db.session.scalars(query)
    return list(drinks)
