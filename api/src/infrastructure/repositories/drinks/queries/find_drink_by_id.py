from models import Drink
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_drink_by_id(session: AsyncSession, drink_id: int) -> Drink | None:
    query = select(Drink).where(Drink.old_id == drink_id)
    result = await session.execute(query)
    return result.scalars().unique().one_or_none()
