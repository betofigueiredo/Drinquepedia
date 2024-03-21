from .drinks_repository_mock import DrinksRepositoryMock
from .highlights_repository_mock import HighlightsRepositoryMock
from .instructions_repository_mock import InstructionsRepositoryMock
from .knowledges_repository_mock import KnowledgesRepositoryMock


class RepositoryMock:
    def __init__(self) -> None:
        self.drinks = DrinksRepositoryMock()
        self.highlights = HighlightsRepositoryMock()
        self.instructions = InstructionsRepositoryMock()
        self.knowledges = KnowledgesRepositoryMock()
