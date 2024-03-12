from infrastructure.repositories.repository import Repository
from schemas import HighlightSchema

from .types import Response, SuccessResponse


def get_highlights_use_case(
    repository: Repository,
) -> Response:
    highlights = repository.highlights.find_all()

    response: SuccessResponse = {
        "highlights": [HighlightSchema().dump(highlight) for highlight in highlights],
    }

    return response, 200
