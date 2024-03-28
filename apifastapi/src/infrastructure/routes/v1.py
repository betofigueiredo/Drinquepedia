from controllers import (
    drinks_controllers,
)
from fastapi import APIRouter

router_v1 = APIRouter()


router_v1.include_router(drinks_controllers.router)
