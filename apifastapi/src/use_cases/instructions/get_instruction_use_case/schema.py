from pydantic import BaseModel, Field


class Validation(BaseModel):
    instruction_id: int = Field(..., gt=0)
