from flask_sqlalchemy import SQLAlchemy
from models import Drink


def find_drink_by_id(db: SQLAlchemy, drink_id: int) -> Drink | None:
    query = db.select(Drink).where(Drink.old_id == drink_id)
    drink = db.session.scalar(query)
    return drink
