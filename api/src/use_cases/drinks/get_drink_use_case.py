from typing import Tuple

from infrastructure.repositories.repository import Repository
from schemas.drink import DrinkSchema
from utils import Utils


def get_drink_use_case(
    drink_id: str | None,
    utils: Utils,
    repository: Repository,
) -> Tuple[dict[str, DrinkSchema], int]:
    drink = repository.drinks.find_by_id(drink_id=drink_id)

    if not drink:
        return {
            "code": "DRINK_NOT_FOUND",
            "message": "Drink not found.",
        }, 404

    return {"drink": DrinkSchema().dump(drink)}, 200
