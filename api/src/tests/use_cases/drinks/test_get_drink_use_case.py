import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Drink
from tests.helpers import helpers
from use_cases.drinks import get_drink_use_case
from utils import Utils


class TestGetDrinkUseCase:
    # TEST
    def test_invalid_drink_id(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        result = get_drink_use_case(
            drink_id=None,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in result[0].get("message")
        assert "drink_id" in result[0].get("message")

    # TEST
    def test_drink_not_found(self) -> None:
        def find_drink_by_id(drink_id: int) -> Drink | None:
            return None

        repository = RepositoryMock()
        repository.drinks.find_by_id = find_drink_by_id
        utils = Utils()
        result = get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "DRINK_NOT_FOUND"
        assert result[0].get("message") == "Drink not found."

    # TEST
    def test_success(self) -> None:
        def find_drink_by_id(drink_id: int) -> Drink | None:
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
        result = get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("drink") is not None
        assert result[1] == 200

    # TEST
    def test_ingredients_ordenation(self) -> None:
        def find_drink_by_id(drink_id: int) -> Drink | None:
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
        result = get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("drink").get("ingredients")[0].get("order") == 1
        assert result[0].get("drink").get("ingredients")[1].get("order") == 2

    # TEST
    def test_preparation_steps_ordenation(self) -> None:
        def find_drink_by_id(drink_id: int) -> Drink | None:
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
        result = get_drink_use_case(
            drink_id=1,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("drink").get("preparation_steps")[0].get("order") == 1
        assert result[0].get("drink").get("preparation_steps")[1].get("order") == 2
