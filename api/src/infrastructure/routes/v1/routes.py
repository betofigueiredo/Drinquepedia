from flask_restful import Api

from .drinks_routes import DrinksRoutes


def setup_routes(api: Api) -> None:
    DrinksRoutes(api).setup()
