from flask_sqlalchemy import SQLAlchemy

from .drinks.drinks_repository import DrinksRepository
from .highlights.highlights_repository import HighlightsRepository
from .instructions.instructions_repository import InstructionsRepository
from .knowledges.knowledges_repository import KnowledgesRepository


class Repository:
    def __init__(self, db: SQLAlchemy):
        self.drinks = DrinksRepository(db)
        self.highlights = HighlightsRepository(db)
        self.instructions = InstructionsRepository(db)
        self.knowledges = KnowledgesRepository(db)
