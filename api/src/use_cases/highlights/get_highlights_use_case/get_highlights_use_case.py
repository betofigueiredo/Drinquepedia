from typing import Tuple

from custom_types import ErrorResponse, GetHighlightsResponse
from infrastructure.repositories.repository import Repository
from schemas import HighlightSchema


def get_highlights_use_case(
    repository: Repository,
) -> Tuple[GetHighlightsResponse | ErrorResponse, int]:
    highlights = repository.highlights.find_all()

    response: GetHighlightsResponse = {
        "highlights": [HighlightSchema().dump(highlight) for highlight in highlights],
    }

    return response, 200
