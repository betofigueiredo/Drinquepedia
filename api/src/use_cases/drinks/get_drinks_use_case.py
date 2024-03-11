from typing import List, Literal, Tuple, TypedDict

from infrastructure.repositories.repository import Repository
from pydantic import BaseModel, Field
from schemas import DrinkSchema
from utils import Utils


class Schema(BaseModel):
    page: int = Field(None, gt=0)
    per_page: int = Field(None, gt=5)
    name: str | None = Field(None)
    calories: Literal["0-100", "100-200", "200-300", "300-"] | None = Field(None)
    ingredient_type: str | None = Field(None)
    alcoholic_content: Literal["LOW", "MEDIUM", "HIGH"] | None = Field(None)


class MetadataSchema(TypedDict):
    total_count: int


class ResponseSchema(TypedDict):
    drinks: List[DrinkSchema]
    metadata: MetadataSchema


class ErrorSchema(TypedDict):
    code: str
    message: str


def get_drinks_use_case(
    query_params: dict[str, str],
    utils: Utils,
    repository: Repository,
) -> Tuple[ResponseSchema | ErrorSchema, int]:
    parsed_params = utils.general.validate_schema(
        schema=Schema,
        params={
            "page": query_params.get("page"),
            "per_page": query_params.get("per_page"),
            "name": query_params.get("name"),
            "calories": query_params.get("calories"),
            "ingredient_type": query_params.get("ingredient_type"),
            "alcoholic_content": query_params.get("alcoholic_content"),
        },
    )

    if parsed_params.get("error"):
        return {
            "code": "INVALID_DATA",
            "message": f"{parsed_params.get('error')}: {parsed_params.get('field')}",
        }, 400

    drinks = repository.drinks.find_all(
        page=parsed_params.get("fields").page,
        per_page=parsed_params.get("fields").per_page,
        name=parsed_params.get("fields").name,
        calories=parsed_params.get("fields").calories,
        ingredient_type=parsed_params.get("fields").ingredient_type,
        alcoholic_content=parsed_params.get("fields").alcoholic_content,
    )

    result: ResponseSchema = {
        "drinks": [DrinkSchema().dump(drink) for drink in drinks],
        "metadata": {
            # "page": page,
            # "per_page": per_page,
            "total_count": 1,  # TODO: get total count
        },
    }

    return result, 200
