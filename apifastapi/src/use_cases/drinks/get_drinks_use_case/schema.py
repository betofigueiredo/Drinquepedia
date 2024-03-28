from typing import Literal

from pydantic import BaseModel, Field


class Validation(BaseModel):
    page: int = Field(..., gt=0)
    per_page: int = Field(..., gt=5)
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
