from typing import List

from infrastructure.repositories.knowledges.queries import (
    find_all_knowledges,
    find_knowledge_by_id,
)
from models import Knowledge
from sqlalchemy.ext.asyncio import AsyncSession


class KnowledgesRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def find_all(self) -> List[Knowledge]:
        return await find_all_knowledges(session=self.session)

    async def find_by_id(self, knowledge_slug: str | None) -> Knowledge | None:
        return await find_knowledge_by_id(
            session=self.session, knowledge_slug=knowledge_slug
        )
