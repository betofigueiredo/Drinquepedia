from typing import Tuple, TypedDict

from custom_types import ErrorResponse
from schemas import DrinkSchema


class Success(TypedDict):
    drink: DrinkSchema


Response = Tuple[Success | ErrorResponse, int]
