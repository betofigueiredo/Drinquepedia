from custom_types import ErrorResponse, GetHighlightResponse
from fastapi import HTTPException, status
from infrastructure.repositories.repository import Repository
from utils import Utils

from .schema import Validation


async def get_highlight_use_case(
    highlight_id: str | None,
    utils: Utils,
    repository: Repository,
) -> GetHighlightResponse | ErrorResponse:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"highlight_id": highlight_id},
    )

    if error:
        raise HTTPException(
            detail={
                "code": "INVALID_DATA",
                "message": f"{error.message}: {error.field}",
            },
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    highlight = await repository.highlights.find_by_id(highlight_id=fields.highlight_id)

    if not highlight:
        raise HTTPException(
            detail={
                "code": "HIGHLIGHT_NOT_FOUND",
                "message": "Highlight not found.",
            },
            status_code=status.HTTP_404_NOT_FOUND,
        )

    return {"highlight": highlight}
