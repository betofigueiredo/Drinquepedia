from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Instruction
from sqlalchemy import asc


def find_all_instructions(
    db: SQLAlchemy,
) -> List[Instruction]:
    list_query = db.select(Instruction).order_by(asc(Instruction.old_id))
    instructions = db.session.scalars(list_query)
    return list(instructions)
