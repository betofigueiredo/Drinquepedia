from typing import List, Tuple

from models import Instruction


class InstructionsRepositoryMock:
    def find_all(self) -> Tuple[List[Instruction], int]:
        return [], 0

    def find_by_id(self, instruction_id: str | None) -> Instruction | None:
        return None
