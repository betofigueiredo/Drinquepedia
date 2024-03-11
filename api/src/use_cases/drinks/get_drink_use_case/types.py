from typing import List, Tuple, TypedDict

from custom_types import Metadata
from schemas import DrinkSchema


class Success(TypedDict):
    drinks: List[DrinkSchema]
    metadata: Metadata


class Error(TypedDict):
    code: str
    message: str


Response = Tuple[Success | Error, int]
