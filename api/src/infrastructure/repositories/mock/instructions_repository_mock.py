from typing import List, Tuple

from models import Instruction


class InstructionsRepositoryMock:
    async def find_all(self) -> Tuple[List[Instruction], int]:
        return [], 0

    async def find_by_id(self, instruction_id: str | None) -> Instruction | None:
        return None
