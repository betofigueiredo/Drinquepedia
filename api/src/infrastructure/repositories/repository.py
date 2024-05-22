from sqlalchemy.ext.asyncio import AsyncSession

from .drinks.drinks_repository import DrinksRepository
from .highlights.highlights_repository import HighlightsRepository
from .instructions.instructions_repository import InstructionsRepository
from .knowledges.knowledges_repository import KnowledgesRepository


class Repository:
    def __init__(self, session: AsyncSession):
        self.drinks = DrinksRepository(session)
        self.highlights = HighlightsRepository(session)
        self.instructions = InstructionsRepository(session)
        self.knowledges = KnowledgesRepository(session)
