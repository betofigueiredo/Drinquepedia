from infrastructure.repositories.repository import Repository
from schemas import HighlightSchema
from utils import Utils

from .types import Response, SuccessResponse, Validation


def get_highlight_use_case(
    highlight_id: str | None,
    utils: Utils,
    repository: Repository,
) -> Response:
    error, parsed_params = utils.general.validate_schema(
        schema=Validation,
        params={"highlight_id": highlight_id},
    )

    if error:
        return {
            "code": "INVALID_DATA",
            "message": f"{error.message}: {error.field}",
        }, 400

    highlight = repository.highlights.find_by_id(
        highlight_id=parsed_params.highlight_id
    )

    response: SuccessResponse = {"highlight": HighlightSchema().dump(highlight)}

    return response, 200
