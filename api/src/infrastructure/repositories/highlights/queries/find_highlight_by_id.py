from flask_sqlalchemy import SQLAlchemy
from models import Highlight


def find_highlight_by_id(db: SQLAlchemy, highlight_id: str | None) -> Highlight | None:
    query = db.select(Highlight).where(Highlight.old_id == highlight_id)
    highlight = db.session.scalar(query)
    return highlight
