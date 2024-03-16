from typing import Tuple

from custom_types import ErrorResponse, GetDrinkResponse
from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from utils import Utils

from .schema import Validation


def get_drink_use_case(
    drink_id: str | None,
    utils: Utils,
    repository: Repository,
) -> Tuple[GetDrinkResponse | ErrorResponse, int]:
    error, parsed_params = utils.general.validate_schema(
        schema=Validation,
        params={"drink_id": drink_id},
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    drink = repository.drinks.find_by_id(drink_id=parsed_params.drink_id)

    if not drink:
        return {
            "code": "DRINK_NOT_FOUND",
            "message": "Drink not found.",
        }, 404

    sorted_ingredients = sorted(drink.ingredients, key=lambda x: x.order)
    drink.ingredients = sorted_ingredients

    sorted_preparation_steps = sorted(drink.preparation_steps, key=lambda x: x.order)
    drink.preparation_steps = sorted_preparation_steps

    response: GetDrinkResponse = {"drink": DrinkSchema().dump(drink)}

    return response, 200
