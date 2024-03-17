from typing import Tuple

from custom_types import ErrorResponse, GetHighlightResponse, GetHighlightsResponse
from flask_restful import Api, Resource
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from use_cases.highlights import (
    get_highlight_use_case,
    get_highlights_use_case,
)
from utils import Utils


class HighlightsList(Resource):
    def get(self) -> Tuple[GetHighlightsResponse | ErrorResponse, int]:
        return get_highlights_use_case(
            repository=Repository(db),
        )


class Highlight(Resource):
    def get(
        self, highlight_id: str
    ) -> Tuple[GetHighlightResponse | ErrorResponse, int]:
        return get_highlight_use_case(
            highlight_id=highlight_id,
            utils=Utils(),
            repository=Repository(db),
        )


class HighlightsRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(HighlightsList, "/highlights")
        self.api.add_resource(Highlight, "/highlights/<highlight_id>")
