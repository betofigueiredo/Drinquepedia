from typing import List

from infrastructure.repositories.instructions.queries import (
    find_all_instructions,
    find_instruction_by_id,
)
from models import Instruction
from sqlalchemy.ext.asyncio import AsyncSession


class InstructionsRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def find_all(self) -> List[Instruction]:
        return await find_all_instructions(session=self.session)

    async def find_by_id(self, instruction_id: int) -> Instruction | None:
        return await find_instruction_by_id(
            session=self.session, instruction_id=instruction_id
        )
