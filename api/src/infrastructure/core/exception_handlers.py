from fastapi import Request, status
from fastapi.responses import JSONResponse


async def unhandled_exception_handler(
    request: Request, error: Exception
) -> JSONResponse:
    error_message = (
        "Unhandled error" if str(error).__contains__("sqlalchemy") else str(error)
    )
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "detail": {
                "code": "UNHANDLED_ERROR",
                "message": error_message,
            }
        },
    )
