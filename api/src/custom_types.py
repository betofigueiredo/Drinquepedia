from typing import TypedDict


class ListMetadata(TypedDict):
    page: int
    per_page: int
    total_count: int


class ErrorResponse(TypedDict):
    code: str
    message: str
