from typing import List

from infrastructure.repositories.highlights.queries import (
    find_all_highlights,
    find_highlight_by_id,
)
from models import Highlight
from sqlalchemy.ext.asyncio import AsyncSession


class HighlightsRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def find_all(self) -> List[Highlight]:
        return await find_all_highlights(session=self.session)

    async def find_by_id(self, highlight_id: int) -> Highlight | None:
        return await find_highlight_by_id(
            session=self.session, highlight_id=highlight_id
        )
