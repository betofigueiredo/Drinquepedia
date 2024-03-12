from typing import NamedTuple, Type

from pydantic import BaseModel, ValidationError


class ErrorSchema(NamedTuple):
    message: str
    field: str


class SuccessResponse(NamedTuple):
    error: None
    fields: BaseModel


class ErrorResponse(NamedTuple):
    error: ErrorSchema
    fields: None


class General:
    def validate_schema(
        self,
        schema: Type[BaseModel],
        params: dict[str, str | int | float | bool | None],
    ) -> SuccessResponse | ErrorResponse:
        try:
            parsed_fields = schema(**params)
            return SuccessResponse(error=None, fields=parsed_fields)
        except ValidationError as exc:
            error = exc.errors()[0]
            error_msg = error.get("msg", "")
            error_field = str(error.get("loc", ())[0]) if error.get("loc", None) else ""
            error_response = ErrorSchema(message=error_msg, field=error_field)
            return ErrorResponse(error=error_response, fields=None)
