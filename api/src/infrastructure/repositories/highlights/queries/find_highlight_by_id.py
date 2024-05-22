from models import Highlight
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_highlight_by_id(
    session: AsyncSession, highlight_id: int
) -> Highlight | None:
    query = select(Highlight).where(Highlight.old_id == highlight_id)
    result = await session.execute(query)
    return result.scalars().unique().one_or_none()
