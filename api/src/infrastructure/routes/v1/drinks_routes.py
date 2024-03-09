from typing import List, Tuple

from flask_restful import Api, Resource, request
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from schemas import DrinkSchema
from use_cases.drinks import get_drink_use_case, get_drinks_use_case
from utils import Utils


class DrinksList(Resource):
    def get(self) -> Tuple[dict[str, List[DrinkSchema]], int]:
        args = request.args
        return get_drinks_use_case(
            page=args.get("page"),
            per_page=args.get("per_page"),
            utils=Utils(),
            repository=Repository(db),
        )


class Drink(Resource):
    def get(self, drink_id: int) -> Tuple[dict[str, DrinkSchema], int]:
        return get_drink_use_case(
            drink_id=drink_id,
            utils=Utils(),
            repository=Repository(db),
        )


class DrinksRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(DrinksList, "/drinks")
        self.api.add_resource(Drink, "/drinks/<drink_id>")
