from typing import List, Tuple, TypedDict

from custom_types import ErrorResponse
from schemas import HighlightSchema


class SuccessResponse(TypedDict):
    highlights: List[HighlightSchema]


Response = Tuple[SuccessResponse | ErrorResponse, int]
