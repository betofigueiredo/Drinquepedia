from typing import Any, AsyncGenerator

from infrastructure.core.settings import settings
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

engine: AsyncEngine = create_async_engine(settings.DB_URL, pool_recycle=3600)


Session = async_sessionmaker(
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
    class_=AsyncSession,
    bind=engine,
)


async def get_session() -> AsyncGenerator[Any, Any]:
    async with Session() as session:
        yield session
