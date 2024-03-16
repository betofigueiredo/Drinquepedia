from typing import List, Tuple

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.drinks.queries import (
    find_all_drinks,
    find_drink_by_id,
)
from models import Drink


class DrinksRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(
        self,
        page: int,
        per_page: int,
        category: str | None,
        name: str | None,
        calories: str | None,
        ingredient_type: str | None,
        alcoholic_content: str | None,
    ) -> Tuple[List[Drink], int]:
        return find_all_drinks(
            db=self.db,
            page=page,
            per_page=per_page,
            category=category,
            name=name,
            calories=calories,
            ingredient_type=ingredient_type,
            alcoholic_content=alcoholic_content,
        )

    def find_by_id(self, drink_id: int) -> Drink | None:
        return find_drink_by_id(db=self.db, drink_id=drink_id)
