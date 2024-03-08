from typing import Tuple


async def unhandled_exception_handler(error: Exception) -> Tuple[dict[str, str], int]:
    """
    This middleware will log all unhandled exceptions.
    Unhandled exceptions are all exceptions that are not HTTPExceptions or RequestValidationErrors.
    """
    error_message = (
        "Unhandled error" if str(error).__contains__("sqlalchemy") else str(error)
    )
    return {"code": "UNHANDLED_ERROR", "message": error_message}, 500
