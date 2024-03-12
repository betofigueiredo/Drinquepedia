from typing import List, Literal, Tuple, TypedDict

from custom_types import ErrorResponse, ListMetadata
from pydantic import BaseModel, Field
from schemas import DrinkSchema


class Validation(BaseModel):
    page: int = Field(None, gt=0)
    per_page: int = Field(None, gt=5)
    category: (
        Literal[
            "martinis",
            "tropicais",
            "frozen",
            "quentes",
            "shot",
            "classicos",
            "semalcool",
            "caipirinhas",
            "smoothies",
        ]
        | None
    ) = Field(None)
    name: str | None = Field(None)
    calories: Literal["0-100", "100-200", "200-300", "300-"] | None = Field(None)
    ingredient_type: str | None = Field(None)
    alcoholic_content: Literal["LOW", "MEDIUM", "HIGH"] | None = Field(None)


class SuccessResponse(TypedDict):
    drinks: List[DrinkSchema]
    metadata: ListMetadata


Response = Tuple[SuccessResponse | ErrorResponse, int]
