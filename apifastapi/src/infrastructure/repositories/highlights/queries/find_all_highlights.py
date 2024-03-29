from typing import List

from models import Highlight
from sqlalchemy import asc
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_all_highlights(
    db_session: AsyncSession,
) -> List[Highlight]:
    async with db_session as session:
        list_query = select(Highlight).order_by(asc(Highlight.title))
        highlights = await session.scalars(list_query)
        return list(highlights)
