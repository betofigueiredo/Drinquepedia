from typing import List

from models import Instruction
from sqlalchemy import asc
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select


async def find_all_instructions(
    db_session: AsyncSession,
) -> List[Instruction]:
    async with db_session as session:
        list_query = select(Instruction).order_by(asc(Instruction.old_id))
        instructions = await session.scalars(list_query)
        return list(instructions)
