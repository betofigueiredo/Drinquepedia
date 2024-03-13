from typing import List, Tuple, TypedDict

from custom_types import ErrorResponse
from pydantic import BaseModel, Field
from schemas import HighlightSchema


class Validation(BaseModel):
    highlight_id: int = Field(None, gt=0)


class SuccessResponse(TypedDict):
    highlights: List[HighlightSchema]


Response = Tuple[SuccessResponse | ErrorResponse, int]
