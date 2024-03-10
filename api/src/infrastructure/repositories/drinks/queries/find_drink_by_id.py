from flask_sqlalchemy import SQLAlchemy
from models import Drink


def find_drink_by_id(db: SQLAlchemy, drink_id: str | None) -> Drink | None:
    # query = db.select(Drink).where(Drink.id == drink_id)
    query = db.select(Drink).where(Drink.old_id == 1)
    drink = db.session.scalar(query)
    return drink
