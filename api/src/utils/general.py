from typing import Type, TypedDict

from pydantic import BaseModel, ValidationError


class SuccessResponse(TypedDict):
    error: None
    fields: BaseModel


class ErrorResponse(TypedDict):
    error: str
    field: str


class General:
    def validate_schema(
        self,
        schema: Type[BaseModel],
        params: dict[str, str | int | float | bool | None],
    ) -> SuccessResponse | ErrorResponse:
        try:
            parsed_fields = schema(**params)
            return {"error": None, "fields": parsed_fields}
        except ValidationError as exc:
            error = exc.errors()[0]
            error_msg = error.get("msg", "")
            field = str(error.get("loc", ())[0]) if error.get("loc", None) else ""
            return {
                "error": error_msg,
                "field": field,
            }
