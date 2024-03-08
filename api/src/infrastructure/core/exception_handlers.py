from typing import Tuple


def unhandled_exception_handler(error: Exception) -> Tuple[dict[str, str], int]:
    error_message = (
        "Unhandled error" if str(error).__contains__("sqlalchemy") else str(error)
    )
    return {"code": "UNHANDLED_ERROR", "message": error_message}, 500


def not_found_handler(error: Exception) -> Tuple[dict[str, str], int]:
    return {"code": "NOT_FOUND", "message": str(error)}, 404
