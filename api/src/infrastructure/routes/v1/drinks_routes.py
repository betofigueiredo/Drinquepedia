from typing import Tuple

from custom_types import ErrorResponse, GetDrinkResponse, GetDrinksResponse
from flask_restful import Api, Resource, request
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from use_cases.drinks import (
    get_drink_use_case,
    get_drinks_use_case,
    seed_drinks_use_case,
)
from utils import Utils


class DrinksList(Resource):
    def get(self) -> Tuple[GetDrinksResponse | ErrorResponse, int]:
        args = request.args
        return get_drinks_use_case(
            query_params=args,
            utils=Utils(),
            repository=Repository(db),
        )


class Drink(Resource):
    def get(self, drink_id: int) -> Tuple[GetDrinkResponse | ErrorResponse, int]:
        return get_drink_use_case(
            drink_id=drink_id,
            utils=Utils(),
            repository=Repository(db),
        )


class SeedDrinks(Resource):
    def get(self) -> bool:
        return seed_drinks_use_case(db=db)


class DrinksRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(SeedDrinks, "/seed-drinks")
        self.api.add_resource(DrinksList, "/drinks")
        self.api.add_resource(Drink, "/drinks/<drink_id>")
