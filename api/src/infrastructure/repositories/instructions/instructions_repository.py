from typing import List

from infrastructure.repositories.instructions.queries import (
    find_all_instructions,
    find_instruction_by_id,
)
from models import Instruction
from sqlalchemy.ext.asyncio import AsyncSession


class InstructionsRepository:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def find_all(self) -> List[Instruction]:
        return await find_all_instructions(db_session=self.db_session)

    async def find_by_id(self, instruction_id: int) -> Instruction | None:
        return await find_instruction_by_id(
            db_session=self.db_session, instruction_id=instruction_id
        )
