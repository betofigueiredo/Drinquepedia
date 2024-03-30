from models import Instruction
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_instruction_by_id(
    db_session: AsyncSession, instruction_id: int
) -> Instruction | None:
    async with db_session as session:
        query = select(Instruction).where(Instruction.old_id == instruction_id)
        result = await session.execute(query)
        return result.scalars().unique().one_or_none()
