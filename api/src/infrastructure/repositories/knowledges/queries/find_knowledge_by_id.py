from flask_sqlalchemy import SQLAlchemy
from models import Knowledge


def find_knowledge_by_id(
    db: SQLAlchemy, knowledge_slug: str | None
) -> Knowledge | None:
    query = db.select(Knowledge).where(Knowledge.slug == knowledge_slug)
    knowledge = db.session.scalar(query)
    return knowledge
