from models import Knowledge
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_knowledge_by_id(
    session: AsyncSession, knowledge_slug: str | None
) -> Knowledge | None:
    query = select(Knowledge).where(Knowledge.slug == knowledge_slug)
    result = await session.execute(query)
    return result.scalars().unique().one_or_none()
