from typing import List, TypedDict

from schemas import DrinkSchema, HighlightSchema, InstructionSchema, KnowledgeSchema


class ListMetadata(TypedDict):
    total_count: int


class ErrorResponse(TypedDict):
    code: str
    message: str


class GetDrinkResponse(TypedDict):
    drink: DrinkSchema


class GetDrinksResponse(TypedDict):
    drinks: List[DrinkSchema]
    metadata: ListMetadata


class GetHighlightResponse(TypedDict):
    highlight: HighlightSchema


class GetHighlightsResponse(TypedDict):
    highlights: List[HighlightSchema]


class GetInstructionResponse(TypedDict):
    instruction: InstructionSchema


class GetInstructionsResponse(TypedDict):
    instructions: List[InstructionSchema]


class GetKnowledgeResponse(TypedDict):
    knowledge: KnowledgeSchema


class GetKnowledgesResponse(TypedDict):
    knowledges: List[KnowledgeSchema]
