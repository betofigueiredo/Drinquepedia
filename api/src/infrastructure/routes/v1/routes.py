from flask_restful import Api

from .drinks_routes import DrinksRoutes
from .highlights_routes import HighlightsRoutes


def setup_routes(api: Api) -> None:
    DrinksRoutes(api).setup()
    HighlightsRoutes(api).setup()
