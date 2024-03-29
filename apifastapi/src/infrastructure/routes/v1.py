from controllers import (
    drinks_controllers,
    highlights_controllers,
    instructions_controllers,
)
from fastapi import APIRouter

router_v1 = APIRouter()


router_v1.include_router(drinks_controllers.router)
router_v1.include_router(highlights_controllers.router)
router_v1.include_router(instructions_controllers.router)
