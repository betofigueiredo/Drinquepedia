from typing import Tuple

from custom_types import ErrorResponse, GetHighlightResponse
from infrastructure.repositories.repository import Repository
from schemas import HighlightSchema
from utils import Utils

from .schema import Validation


def get_highlight_use_case(
    highlight_id: str | None,
    utils: Utils,
    repository: Repository,
) -> Tuple[GetHighlightResponse | ErrorResponse, int]:
    error, fields = utils.general.validate_schema(
        schema=Validation,
        params={"highlight_id": highlight_id},
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    highlight = repository.highlights.find_by_id(highlight_id=fields.highlight_id)

    if not highlight:
        return {
            "code": "HIGHLIGHT_NOT_FOUND",
            "message": "Highlight not found.",
        }, 404

    response: GetHighlightResponse = {"highlight": HighlightSchema().dump(highlight)}

    return response, 200
