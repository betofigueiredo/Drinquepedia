from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Knowledge
from sqlalchemy import asc


def find_all_knowledges(
    db: SQLAlchemy,
) -> List[Knowledge]:
    list_query = db.select(Knowledge).order_by(asc(Knowledge.title))
    knowledges = db.session.scalars(list_query)
    return list(knowledges)
