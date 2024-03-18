from typing import List

from flask_sqlalchemy import SQLAlchemy
from infrastructure.repositories.instructions.queries import (
    find_all_instructions,
    find_instruction_by_id,
)
from models import Instruction


class InstructionsRepository:
    def __init__(self, db: SQLAlchemy):
        self.db = db

    def find_all(self) -> List[Instruction]:
        return find_all_instructions(db=self.db)

    def find_by_id(self, instruction_id: str | None) -> Instruction | None:
        return find_instruction_by_id(db=self.db, instruction_id=instruction_id)
