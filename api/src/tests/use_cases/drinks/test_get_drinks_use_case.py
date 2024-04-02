from typing import List, Tuple, cast

import pytest  # noqa: F401
from fastapi import HTTPException
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Drink
from tests.helpers import helpers
from use_cases.drinks import get_drinks_use_case
from utils import Utils


@pytest.mark.asyncio
class TestGetDrinksUseCase:
    # TEST
    async def test_invalid_page(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            query_params = {"page": None, "per_page": 10}
            await get_drinks_use_case(
                query_params=query_params,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in detail.get("message", "")
        assert "page" in detail.get("message", "")

    # TEST
    async def test_invalid_per_page(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            query_params = {"page": 1, "per_page": None}
            await get_drinks_use_case(
                query_params=query_params,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in detail.get("message", "")
        assert "per_page" in detail.get("message", "")

    # TEST
    async def test_invalid_category(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            query_params = {"page": 1, "per_page": 10, "category": "invalid_value"}
            await get_drinks_use_case(
                query_params=query_params,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "category" in detail.get("message", "")

    # TEST
    async def test_invalid_calories(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            query_params = {"page": 1, "per_page": 10, "calories": "invalid_value"}
            await get_drinks_use_case(
                query_params=query_params,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "calories" in detail.get("message", "")

    # TEST
    async def test_invalid_alcoholic_content(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = RepositoryMock()
            utils = Utils()
            query_params = {
                "page": 1,
                "per_page": 10,
                "alcoholic_content": "invalid_value",
            }
            await get_drinks_use_case(
                query_params=query_params,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "alcoholic_content" in detail.get("message", "")

    # TEST
    async def test_success(self) -> None:
        async def find_all_drinks(
            page: int,
            per_page: int,
            category: str | None,
            search: str | None,
            calories: str | None,
            alcoholic_content: str | None,
        ) -> Tuple[List[Drink], int]:
            return [
                helpers.CreateDotDict(
                    {
                        "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                        "old_id": 1,
                        "name": "Drink 1",
                    }
                )
            ], 1

        repository = RepositoryMock()
        repository.drinks.find_all = find_all_drinks
        utils = Utils()
        query_params = {"page": 1, "per_page": 10}
        result = await get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result.get("drinks") is not None
