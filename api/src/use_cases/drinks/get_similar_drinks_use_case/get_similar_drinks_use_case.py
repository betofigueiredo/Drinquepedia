from custom_types import ErrorResponse, GetSimilarDrinksResponse
from fastapi import HTTPException, status
from infrastructure.repositories.repository import Repository
from utils import Utils

from .schema import Validation


async def get_similar_drinks_use_case(
    drink_id: str | None,
    utils: Utils,
    repository: Repository,
) -> GetSimilarDrinksResponse | ErrorResponse:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"drink_id": drink_id},
    )

    if error:
        raise HTTPException(
            detail={
                "code": "INVALID_DATA",
                "message": f"{error.message}: {error.field}",
            },
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    drink = await repository.drinks.find_by_id(drink_id=fields.drink_id)

    if not drink:
        raise HTTPException(
            detail={
                "code": "DRINK_NOT_FOUND",
                "message": "Drink not found.",
            },
            status_code=status.HTTP_404_NOT_FOUND,
        )

    categories = [category.category.name for category in drink.categories]
    ingredients = [ingredient.ingredient_type.name for ingredient in drink.ingredients]

    similar_drinks = await repository.drinks.find_similar(
        categories=categories,
        ingredients=ingredients,
    )

    return {"drinks": similar_drinks}
