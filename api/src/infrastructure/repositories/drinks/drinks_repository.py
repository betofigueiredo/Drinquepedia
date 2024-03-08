from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Drink

from .queries import (
    find_all_drinks,
    find_drink_by_id,
)


class DrinksRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self, page: int, per_page: int) -> List[Drink]:
        return find_all_drinks(db=self.db, page=page, per_page=per_page)

    def find_by_id(self, drink_id: str | None) -> Drink | None:
        return find_drink_by_id(db=self.db, drink_id=drink_id)
