from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from utils import Utils

from .types import Response, Success, Validation


def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> Response:
    validation = utils.general.validate_schema(
        schema=Validation,
        params={
            "page": query_params.get("page"),
            "per_page": query_params.get("per_page"),
            "name": query_params.get("name"),
            "calories": query_params.get("calories"),
            "ingredient_type": query_params.get("ingredient_type"),
            "alcoholic_content": query_params.get("alcoholic_content"),
        },
    )

    if validation.get("error"):
        return {
            "code": "INVALID_DATA",
            "message": f"{validation.get('error')}: {validation.get('field')}",
        }, 400

    parsed_params = validation.get("fields")

    drinks = repository.drinks.find_all(
        page=parsed_params.page,
        per_page=parsed_params.per_page,
        name=parsed_params.name,
        calories=parsed_params.calories,
        ingredient_type=parsed_params.ingredient_type,
        alcoholic_content=parsed_params.alcoholic_content,
    )

    response: Success = {
        "drinks": [DrinkSchema().dump(drink) for drink in drinks],
        "metadata": {
            "page": parsed_params.page,
            "per_page": parsed_params.per_page,
            "total_count": 1,  # TODO: get total count
        },
    }

    return response, 200
