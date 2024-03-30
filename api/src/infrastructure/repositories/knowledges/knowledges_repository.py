from typing import List

from infrastructure.repositories.knowledges.queries import (
    find_all_knowledges,
    find_knowledge_by_id,
)
from models import Knowledge
from sqlalchemy.ext.asyncio import AsyncSession


class KnowledgesRepository:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def find_all(self) -> List[Knowledge]:
        return await find_all_knowledges(db_session=self.db_session)

    async def find_by_id(self, knowledge_slug: str | None) -> Knowledge | None:
        return await find_knowledge_by_id(
            db_session=self.db_session, knowledge_slug=knowledge_slug
        )
