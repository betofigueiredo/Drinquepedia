from typing import List

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.knowledges.queries import (
    find_all_knowledges,
    find_knowledge_by_id,
)
from models import Knowledge


class KnowledgesRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self) -> List[Knowledge]:
        return find_all_knowledges(db=self.db)

    def find_by_id(self, knowledge_slug: str | None) -> Knowledge | None:
        return find_knowledge_by_id(db=self.db, knowledge_slug=knowledge_slug)
