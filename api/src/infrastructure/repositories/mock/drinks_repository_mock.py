from typing import List

from models import Drink


class DrinksRepositoryMock:
    def find_all(self, page: int, per_page: int) -> List[Drink]:
        return []

    def find_by_id(self, drink_id: str | None) -> Drink | None:
        return None
