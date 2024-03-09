from typing import List, Tuple

from infrastructure.repositories.repository import Repository
from pydantic import BaseModel, Field
from schemas import DrinkSchema
from utils import Utils


class Schema(BaseModel):
    page: int = Field(None, gt=0)
    per_page: int = Field(None, gt=5)


def get_drinks_use_case(
    page: int,
    per_page: int,
    utils: Utils,
    repository: Repository,
) -> Tuple[dict[str, List[DrinkSchema]], int]:
    validation = utils.general.validate_schema(
        schema=Schema, params={"page": page, "per_page": per_page}
    )

    if validation.get("error"):
        return {
            "code": "INVALID_DATA",
            "message": f"{validation.get('error')}: {validation.get('field')}",
        }, 400

    page = validation.get("fields").page
    per_page = validation.get("fields").per_page

    drinks = repository.drinks.find_all(page=page, per_page=per_page)

    return {"drinks": [DrinkSchema().dump(drink) for drink in drinks]}, 200
