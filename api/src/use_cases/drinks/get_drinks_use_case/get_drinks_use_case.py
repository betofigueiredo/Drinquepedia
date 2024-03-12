from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from utils import Utils

from .types import Response, SuccessResponse, Validation


def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> Response:
    error, parsed_params = utils.general.validate_schema(
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

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    drinks, total_count = repository.drinks.find_all(
        page=parsed_params.page,
        per_page=parsed_params.per_page,
        name=parsed_params.name,
        calories=parsed_params.calories,
        ingredient_type=parsed_params.ingredient_type,
        alcoholic_content=parsed_params.alcoholic_content,
    )

    response: SuccessResponse = {
        "drinks": [DrinkSchema().dump(drink) for drink in drinks],
        "metadata": {
            "page": parsed_params.page,
            "per_page": parsed_params.per_page,
            "total_count": total_count,
        },
    }

    return response, 200
