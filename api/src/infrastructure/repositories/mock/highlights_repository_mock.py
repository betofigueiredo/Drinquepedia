from typing import List, Tuple

from models import Highlight


class HighlightsRepositoryMock:
    async def find_all(self) -> Tuple[List[Highlight], int]:
        return [], 0

    async def find_by_id(self, highlight_id: str | None) -> Highlight | None:
        return None
