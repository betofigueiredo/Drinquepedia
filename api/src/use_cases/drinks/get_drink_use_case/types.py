from typing import Tuple, TypedDict

from custom_types import ErrorResponse
from schemas import DrinkSchema


class SuccessResponse(TypedDict):
    drink: DrinkSchema


Response = Tuple[SuccessResponse | ErrorResponse, int]
