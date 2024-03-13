from typing import List, Tuple

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.highlights.queries import (
    find_all_highlights,
    find_highlight_by_id,
)
from models import Highlight


class HighlightsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self) -> Tuple[List[Highlight], int]:
        return find_all_highlights(db=self.db)

    def find_by_id(self, highlight_id: str | None) -> Highlight | None:
        return find_highlight_by_id(db=self.db, highlight_id=highlight_id)
