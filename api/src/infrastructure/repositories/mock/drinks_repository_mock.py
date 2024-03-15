from typing import List, Tuple

from models import Drink


class DrinksRepositoryMock:
    def find_all(
        self,
        page: int,
        per_page: int,
        category: str | None,
        name: str | None,
        calories: str | None,
        ingredient_type: str | None,
        alcoholic_content: str | None,
    ) -> Tuple[List[Drink], int]:
        return [], 0

    def find_by_id(self, drink_id: str | None) -> Drink | None:
        return None
