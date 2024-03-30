from custom_types import ErrorResponse, GetHighlightsResponse
from infrastructure.repositories.repository import Repository


async def get_highlights_use_case(
    repository: Repository,
) -> GetHighlightsResponse | ErrorResponse:
    highlights = await repository.highlights.find_all()
    return {"highlights": highlights}
