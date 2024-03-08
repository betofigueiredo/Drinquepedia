from typing import List

from flask_sqlalchemy import SQLAlchemy
from models import Drink
from sqlalchemy import asc


def find_all_drinks(
    db: SQLAlchemy,
    page: int,
    per_page: int,
) -> List[Drink]:
    query = (
        db.select(Drink)
        .order_by(asc(Drink.name))
        .limit(per_page)
        .offset((page - 1) * per_page)
    )
    drinks = db.session.scalars(query)
    return list(drinks)
