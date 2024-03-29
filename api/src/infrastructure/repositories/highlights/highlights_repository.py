from typing import List

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.highlights.queries import (
    find_all_highlights,
    find_highlight_by_id,
)
from models import Highlight


class HighlightsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self) -> List[Highlight]:
        return find_all_highlights(db=self.db)

    def find_by_id(self, highlight_id: int) -> Highlight | None:
        return find_highlight_by_id(db=self.db, highlight_id=highlight_id)
