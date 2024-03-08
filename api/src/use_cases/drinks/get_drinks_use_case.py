from typing import List, Tuple

from infrastructure.repositories.repository import Repository
from schemas.drink import DrinkSchema
from utils import Utils


def get_drinks_use_case(
    utils: Utils,
    repository: Repository,
) -> Tuple[dict[str, List[DrinkSchema]], int]:
    drinks = repository.drinks.find_all()

    return {"drinks": [DrinkSchema().dump(drink) for drink in drinks]}, 200
