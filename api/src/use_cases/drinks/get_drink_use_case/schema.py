from pydantic import BaseModel, Field


class Validation(BaseModel):
    drink_id: int = Field(..., gt=0)
