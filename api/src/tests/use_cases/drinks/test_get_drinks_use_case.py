from typing import List, Tuple

import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from models import Drink
from tests.helpers import helpers
from use_cases.drinks import get_drinks_use_case
from utils import Utils


class TestGetDrinksUseCase:
    # TEST
    def test_invalid_page(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        query_params = {"page": None, "per_page": 10}
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in result[0].get("message")
        assert "page" in result[0].get("message")

    # TEST
    def test_invalid_per_page(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        query_params = {"page": 1, "per_page": None}
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "Input should be a valid integer" in result[0].get("message")
        assert "per_page" in result[0].get("message")

    # TEST
    def test_invalid_category(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        query_params = {"page": 1, "per_page": 10, "category": "invalid_value"}
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "category" in result[0].get("message")

    # TEST
    def test_invalid_calories(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        query_params = {"page": 1, "per_page": 10, "calories": "invalid_value"}
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "calories" in result[0].get("message")

    # TEST
    def test_invalid_alcoholic_content(self) -> None:
        repository = RepositoryMock()
        utils = Utils()
        query_params = {"page": 1, "per_page": 10, "alcoholic_content": "invalid_value"}
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("code") == "INVALID_DATA"
        assert "alcoholic_content" in result[0].get("message")

    # TEST
    def test_success(self) -> None:
        def find_all_drinks(
            page: int,
            per_page: int,
            category: str | None,
            name: str | None,
            calories: str | None,
            ingredient_type: str | None,
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
        result = get_drinks_use_case(
            query_params=query_params,
            utils=utils,
            repository=repository,
        )
        assert result[0].get("drinks") is not None
        assert result[1] == 200
