from typing import List, Tuple

from models import Drink


class DrinksRepositoryMock:
    async def find_all(
        self,
        page: int,
        per_page: int,
        category: str | None,
        search: str | None,
        calories: str | None,
        alcoholic_content: str | None,
    ) -> Tuple[List[Drink], int]:
        return [], 0

    async def find_by_id(self, drink_id: str | None) -> Drink | None:
        return None

    async def find_similar(
        self, drink_id: int, categories: List[int], ingredients: List[str]
    ) -> List[Drink]:
        return []
