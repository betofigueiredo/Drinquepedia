from typing import cast

import pytest
from fastapi import HTTPException
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from infrastructure.repositories.repository import Repository
from models import Drink
from tests.helpers import helpers
from use_cases.drinks import get_drink_use_case
from utils import Utils


@pytest.mark.asyncio
class TestGetDrinkUseCase:
    # TEST
    async def test_invalid_drink_id(self) -> None:
        with pytest.raises(HTTPException) as err:
            repository = cast(Repository, RepositoryMock())
            utils = Utils()
            await get_drink_use_case(
                drink_id=None,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 400
        assert detail.get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in detail.get("message", "")
        assert "drink_id" in detail.get("message", "")

    # TEST
    async def test_drink_not_found(self) -> None:
        with pytest.raises(HTTPException) as err:

            async def find_drink_by_id(drink_id: int) -> Drink | None:
                return None

            repository = cast(Repository, RepositoryMock())
            repository.drinks.find_by_id = find_drink_by_id
            # setattr(repository.drinks, "find_by_id", find_drink_by_id)
            utils = Utils()
            await get_drink_use_case(
                drink_id=1,
                utils=utils,
                repository=repository,
            )
        detail: dict[str, str] = cast(dict[str, str], err.value.detail)
        assert err.value.status_code == 404
        assert detail.get("code") == "DRINK_NOT_FOUND"
        assert detail.get("message") == "Drink not found."

    # TEST
    async def test_success(self) -> None:
        async def find_drink_by_id(drink_id: int) -> Drink | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Drink 1",
                    "ingredients": [],
                    "preparation_steps": [],
                }
            )

        repository = RepositoryMock()
        repository.drinks.find_by_id = find_drink_by_id
        utils = Utils()
        result = await get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result.get("drink") is not None

    # TEST
    async def test_ingredients_ordenation(self) -> None:
        async def find_drink_by_id(drink_id: int) -> Drink | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Drink 1",
                    "ingredients": [
                        helpers.CreateDotDict(
                            {
                                "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                                "name": "Ingredient 1",
                                "order": 2,
                            }
                        ),
                        helpers.CreateDotDict(
                            {
                                "id": "fccfcd2c-d3fc-4210-bab4-012680df6d2e",
                                "name": "Ingredient 2",
                                "order": 1,
                            }
                        ),
                    ],
                    "preparation_steps": [],
                }
            )

        repository = RepositoryMock()
        repository.drinks.find_by_id = find_drink_by_id
        utils = Utils()
        result = await get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result.get("drink").get("ingredients")[0].get("order") == 1
        assert result.get("drink").get("ingredients")[1].get("order") == 2

    # TEST
    async def test_preparation_steps_ordenation(self) -> None:
        async def find_drink_by_id(drink_id: int) -> Drink | None:
            return helpers.CreateDotDict(
                {
                    "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                    "old_id": 1,
                    "name": "Drink 1",
                    "ingredients": [],
                    "preparation_steps": [
                        helpers.CreateDotDict(
                            {
                                "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
                                "order": 2,
                            }
                        ),
                        helpers.CreateDotDict(
                            {
                                "id": "fccfcd2c-d3fc-4210-bab4-012680df6d2e",
                                "order": 1,
                            }
                        ),
                    ],
                }
            )

        repository = RepositoryMock()
        repository.drinks.find_by_id = find_drink_by_id
        utils = Utils()
        result = await get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result.get("drink").get("preparation_steps")[0].get("order") == 1
        assert result.get("drink").get("preparation_steps")[1].get("order") == 2
