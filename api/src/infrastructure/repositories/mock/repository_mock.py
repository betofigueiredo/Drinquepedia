from .drinks_repository_mock import DrinksRepositoryMock


class RepositoryMock:
    def __init__(self) -> None:
        self.drinks = DrinksRepositoryMock()