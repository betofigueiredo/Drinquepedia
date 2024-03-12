from typing import List, Tuple

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.highlights.queries import (
    find_all_highlights,
)
from models import Drink


class HighlightsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self) -> Tuple[List[Drink], int]:
        return find_all_highlights(db=self.db)

    # def find_by_id(self, drink_id: str | None) -> Drink | None:
    #     return find_drink_by_id(db=self.db, drink_id=drink_id)
