from custom_types import ErrorResponse, GetInstructionResponse, GetInstructionsResponse
from fastapi import APIRouter, Depends
from infrastructure.core.database import get_session
from infrastructure.repositories.repository import Repository
from sqlalchemy.ext.asyncio import AsyncSession
from use_cases.instructions import get_instruction_use_case, get_instructions_use_case
from utils import Utils

router = APIRouter(prefix="/instructions", tags=["instructions"])


@router.get("/", response_model=GetInstructionsResponse)
async def get_instructions(
    session: AsyncSession = Depends(get_session),
) -> GetInstructionsResponse | ErrorResponse:
    return await get_instructions_use_case(
        repository=Repository(session),
    )


@router.get("/{instruction_id}", response_model=GetInstructionResponse)
async def get_instruction(
    instruction_id: str,
    session: AsyncSession = Depends(get_session),
) -> GetInstructionResponse | ErrorResponse:
    return await get_instruction_use_case(
        instruction_id=instruction_id,
        utils=Utils(),
        repository=Repository(session),
    )
