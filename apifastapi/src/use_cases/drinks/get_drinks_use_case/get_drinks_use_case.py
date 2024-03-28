from typing import Tuple

from custom_types import ErrorResponse, GetDrinksResponse
from infrastructure.repositories.repository import Repository

# from schemas import DrinkSchema
from utils import Utils

# from .schema import Validation


async def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> Tuple[GetDrinksResponse | ErrorResponse, int]:
    # error, fields = utils.general.validate_schema(
    #     schema=Validation,
    #     params={
    #         "page": query_params.get("page"),
    #         "per_page": query_params.get("per_page"),
    #         "category": query_params.get("category"),
    #         "name": query_params.get("name"),
    #         "calories": query_params.get("calories"),
    #         "ingredient_type": query_params.get("ingredient_type"),
    #         "alcoholic_content": query_params.get("alcoholic_content"),
    #     },
    # )

    # if error:
    #     return {
    #         "code": "INVALID_DATA",
    #         "message": f"{error.message}: {error.field}",
    #     }, 400

    # validation = utils.general.validate_schema(
    #     schema=Schema, params={"user_id": user_id}
    # )

    # if validation.get("error"):
    #     raise HTTPException(
    #         detail={
    #             "code": "INVALID_DATA",
    #             "message": f"{validation.get('error')}: {validation.get('field')}",
    #         },
    #         status_code=status.HTTP_400_BAD_REQUEST,
    #     )

    drinks, total_count = await repository.drinks.find_all(
        page=1,
        per_page=10,
        category=None,
        name=None,
        calories=None,
        ingredient_type=None,
        alcoholic_content=None,
    )

    response: GetDrinksResponse = {
        "drinks": drinks,
        "metadata": {
            "total_count": total_count,
        },
    }

    return response
