from pydantic import BaseModel, Field


class Validation(BaseModel):
    knowledge_slug: str = Field()
