from sqlalchemy.ext.asyncio import AsyncSession

from .drinks.drinks_repository import DrinksRepository
from .highlights.highlights_repository import HighlightsRepository
from .instructions.instructions_repository import InstructionsRepository
from .knowledges.knowledges_repository import KnowledgesRepository


class Repository:
    def __init__(self, db_session: AsyncSession):
        pass
        self.drinks = DrinksRepository(db_session)
        self.highlights = HighlightsRepository(db_session)
        self.instructions = InstructionsRepository(db_session)
        self.knowledges = KnowledgesRepository(db_session)
