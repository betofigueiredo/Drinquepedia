from typing import List, Literal, Tuple, TypedDict

from custom_types import Metadata
from pydantic import BaseModel, Field
from schemas import DrinkSchema


class Validation(BaseModel):
    page: int = Field(None, gt=0)
    per_page: int = Field(None, gt=5)
    name: str | None = Field(None)
    calories: Literal["0-100", "100-200", "200-300", "300-"] | None = Field(None)
    ingredient_type: str | None = Field(None)
    alcoholic_content: Literal["LOW", "MEDIUM", "HIGH"] | None = Field(None)


class Success(TypedDict):
    drinks: List[DrinkSchema]
    metadata: Metadata


class Error(TypedDict):
    code: str
    message: str


Response = Tuple[Success | Error, int]
