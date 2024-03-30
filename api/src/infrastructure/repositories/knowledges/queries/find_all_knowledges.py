from typing import List

from models import Knowledge
from sqlalchemy import asc
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_all_knowledges(
    db_session: AsyncSession,
) -> List[Knowledge]:
    async with db_session as session:
        list_query = select(Knowledge).order_by(asc(Knowledge.title))
        knowledges = await session.scalars(list_query)
        return list(knowledges)
