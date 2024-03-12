from typing import List, Tuple

from flask_restful import Api, Resource
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from use_cases.highlights import (
    get_highlights_use_case,
)


class HighlightsList(Resource):
    def get(self) -> Tuple[dict[str, List[DrinkSchema]], int]:
        return get_highlights_use_case(
            repository=Repository(db),
        )


# class Highlight(Resource):
#     def get(self, drink_id: int) -> Tuple[dict[str, DrinkSchema], int]:
#         return get_drink_use_case(
#             drink_id=drink_id,
#             utils=Utils(),
#             repository=Repository(db),
#         )


class HighlightsRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(HighlightsList, "/highlights")
        # self.api.add_resource(Drink, "/drinks/<drink_id>")
