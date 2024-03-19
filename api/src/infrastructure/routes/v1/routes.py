from flask_restful import Api

from .drinks_routes import DrinksRoutes
from .highlights_routes import HighlightsRoutes
from .instructions_routes import InstructionsRoutes
from .knowledge_routes import KnowledgeRoutes


def setup_routes(api: Api) -> None:
    DrinksRoutes(api).setup()
    HighlightsRoutes(api).setup()
    InstructionsRoutes(api).setup()
    KnowledgeRoutes(api).setup()
