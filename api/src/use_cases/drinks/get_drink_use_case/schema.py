from pydantic import BaseModel, Field


class Validation(BaseModel):
    drink_id: int = Field(None, gt=0)
