from pydantic import BaseModel, Field


class Validation(BaseModel):
    highlight_id: int = Field(None, gt=0)
