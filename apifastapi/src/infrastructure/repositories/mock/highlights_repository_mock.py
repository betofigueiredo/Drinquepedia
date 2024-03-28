from typing import List, Tuple

from models import Highlight


class HighlightsRepositoryMock:
    def find_all(self) -> Tuple[List[Highlight], int]:
        return [], 0

    def find_by_id(self, highlight_id: str | None) -> Highlight | None:
        return None
