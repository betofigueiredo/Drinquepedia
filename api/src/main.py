import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from infrastructure.core.exception_handlers import unhandled_exception_handler
from infrastructure.core.settings import settings
from infrastructure.routes.v1 import router_v1

app = FastAPI(title="Drinquepedia")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_v1, prefix=settings.API_V1_PREFIX)

app.add_exception_handler(Exception, unhandled_exception_handler)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=3000,
        reload=True,
    )
