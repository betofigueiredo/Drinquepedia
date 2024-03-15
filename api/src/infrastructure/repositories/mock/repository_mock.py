from .drinks_repository_mock import DrinksRepositoryMock
from .highlights_repository_mock import HighlightsRepositoryMock


class RepositoryMock:
    def __init__(self) -> None:
        self.drinks = DrinksRepositoryMock()
        self.highlights = HighlightsRepositoryMock()
