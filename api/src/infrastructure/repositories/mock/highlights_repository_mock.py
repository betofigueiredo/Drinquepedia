from typing import List, Tuple

from models import Drink


class HighlightsRepositoryMock:
    def find_all(
        self,
    ) -> Tuple[List[Drink], int]:
        return [], 0

    def find_by_id(self, drink_id: str | None) -> Drink | None:
        return None
