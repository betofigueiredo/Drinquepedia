from typing import Tuple

from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
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

    sorted_ingredients = sorted(drink.ingredients, key=lambda x: x.order)
    drink.ingredients = sorted_ingredients

    sorted_preparation_steps = sorted(drink.preparation_steps, key=lambda x: x.order)
    drink.preparation_steps = sorted_preparation_steps

    return {"drink": DrinkSchema().dump(drink)}, 200
