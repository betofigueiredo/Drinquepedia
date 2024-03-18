from typing import Tuple

from custom_types import ErrorResponse, GetInstructionResponse, GetInstructionsResponse
from flask_restful import Api, Resource
from infrastructure.core.database import db
from infrastructure.repositories.repository import Repository
from use_cases.instructions import get_instruction_use_case, get_instructions_use_case
from utils import Utils


class InstructionsList(Resource):
    def get(self) -> Tuple[GetInstructionsResponse | ErrorResponse, int]:
        return get_instructions_use_case(
            repository=Repository(db),
        )


class Instruction(Resource):
    def get(
        self, instruction_id: str
    ) -> Tuple[GetInstructionResponse | ErrorResponse, int]:
        return get_instruction_use_case(
            instruction_id=instruction_id,
            utils=Utils(),
            repository=Repository(db),
        )


class InstructionsRoutes:
    def __init__(self, api: Api):
        self.api = api

    def setup(self) -> None:
        self.api.add_resource(InstructionsList, "/instructions")
        self.api.add_resource(Instruction, "/instructions/<instruction_id>")
