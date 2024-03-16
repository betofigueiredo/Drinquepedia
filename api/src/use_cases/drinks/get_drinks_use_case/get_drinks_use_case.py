from typing import Tuple

from custom_types import ErrorResponse, GetDrinksResponse
from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from utils import Utils

from .schema import Validation


def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> Tuple[GetDrinksResponse | ErrorResponse, int]:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={
            "page": query_params.get("page"),
            "per_page": query_params.get("per_page"),
            "category": query_params.get("category"),
            "name": query_params.get("name"),
            "calories": query_params.get("calories"),
            "ingredient_type": query_params.get("ingredient_type"),
            "alcoholic_content": query_params.get("alcoholic_content"),
        },
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    drinks, total_count = repository.drinks.find_all(
        page=fields.page,
        per_page=fields.per_page,
        category=fields.category,
        name=fields.name,
        calories=fields.calories,
        ingredient_type=fields.ingredient_type,
        alcoholic_content=fields.alcoholic_content,
    )

    response: GetDrinksResponse = {
        "drinks": [DrinkSchema().dump(drink) for drink in drinks],
        "metadata": {
            "total_count": total_count,
        },
    }

    return response, 200
