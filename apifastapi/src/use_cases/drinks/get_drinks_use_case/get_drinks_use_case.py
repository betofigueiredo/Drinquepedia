from custom_types import ErrorResponse, GetDrinksResponse
from fastapi import HTTPException, status
from infrastructure.repositories.repository import Repository
from utils import Utils

from .schema import Validation


async def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> GetDrinksResponse | ErrorResponse:
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
        raise HTTPException(
            detail={
                "code": "INVALID_DATA",
                "message": f"{error.message}: {error.field}",
            },
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    drinks, total_count = await repository.drinks.find_all(
        page=fields.page,
        per_page=fields.per_page,
        category=fields.category,
        name=fields.name,
        calories=fields.calories,
        ingredient_type=fields.ingredient_type,
        alcoholic_content=fields.alcoholic_content,
    )

    response: GetDrinksResponse = {
        "drinks": drinks,
        "metadata": {"total_count": total_count},
    }

    return response
