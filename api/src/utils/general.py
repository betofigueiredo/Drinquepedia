from typing import Type

from pydantic import BaseModel, ValidationError


class General:
    def validate_schema(
        self,
        schema: Type[BaseModel],
        params: dict[str, str | int | float | bool | None],
    ) -> dict[str, str | int | None]:
        try:
            schema(**params)
            return {"error": None}
        except ValidationError as exc:
            error = exc.errors()[0]
            error_msg = error.get("msg", "")
            field = str(error.get("loc", ())[0]) if error.get("loc", None) else ""
            return {
                "error": error_msg,
                "field": field,
            }
