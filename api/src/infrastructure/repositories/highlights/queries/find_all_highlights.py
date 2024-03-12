from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Highlight
from sqlalchemy import asc


def find_all_highlights(
    db: SQLAlchemy,
) -> List[Highlight]:
    list_query = db.select(Highlight).order_by(asc(Highlight.title))
    highlights = db.session.scalars(list_query)
    return list(highlights)
