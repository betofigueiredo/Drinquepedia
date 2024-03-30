from typing import Any, AsyncGenerator

from infrastructure.core.settings import settings
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

engine: AsyncEngine = create_async_engine(settings.DB_URL)


Session = async_sessionmaker(
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
    class_=AsyncSession,
    bind=engine,
)


async def get_db_session() -> AsyncGenerator[Any, Any]:
    session = Session()
    try:
        yield session
    finally:
        await session.close()
