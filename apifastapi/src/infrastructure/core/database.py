from infrastructure.core.settings import settings
from sqlalchemy.ext.asyncio import AsyncEngine, AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

engine: AsyncEngine = create_async_engine(settings.DB_URL)


Session = sessionmaker(
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
    class_=AsyncSession,
    bind=engine,  # type: ignore
)  # type: ignore


async def get_db_session():
    session = Session()
    try:
        yield session
    finally:
        await session.close()  # type: ignore
