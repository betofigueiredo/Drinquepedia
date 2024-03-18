from flask_sqlalchemy import SQLAlchemy
from models import Instruction


def find_instruction_by_id(
    db: SQLAlchemy, instruction_id: str | None
) -> Instruction | None:
    query = db.select(Instruction).where(Instruction.old_id == instruction_id)
    instruction = db.session.scalar(query)
    return instruction
