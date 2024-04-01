from typing import List, Tuple

from models import Knowledge


class KnowledgesRepositoryMock:
    async def find_all(self) -> Tuple[List[Knowledge], int]:
        return [], 0

    async def find_by_id(self, knowledge_slug: str | None) -> Knowledge | None:
        return None
