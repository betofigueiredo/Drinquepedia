from typing import Tuple

from custom_types import ErrorResponse, GetKnowledgeResponse, GetKnowledgesResponse
from flask_restful import Api, Resource
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from use_cases.knowledges import get_knowledge_use_case, get_knowledges_use_case
from utils import Utils


class KnowledgeList(Resource):
    def get(self) -> Tuple[GetKnowledgesResponse | ErrorResponse, int]:
        return get_knowledges_use_case(
            repository=Repository(db),
        )


class Knowledge(Resource):
    def get(
        self, knowledge_slug: str
    ) -> Tuple[GetKnowledgeResponse | ErrorResponse, int]:
        return get_knowledge_use_case(
            knowledge_slug=knowledge_slug,
            utils=Utils(),
            repository=Repository(db),
        )


class KnowledgeRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(KnowledgeList, "/knowledges")
        self.api.add_resource(Knowledge, "/knowledges/<knowledge_slug>")
