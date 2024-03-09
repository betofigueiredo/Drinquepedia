import pytest  # noqa: F401
from infrastructure.repositories.mock.repository_mock import RepositoryMock
from use_cases.drinks.get_drinks_use_case import get_drinks_use_case
from utils import Utils


class TestGetDrinksUseCase:
    # TEST
    def test_invalid_user_id(self):
        repository = RepositoryMock()
        utils = Utils()
        result = get_drinks_use_case(
            page=None,
            per_page="10",
            utils=utils,
            repository=repository,  # type: ignore
        )
        assert result[0].get("code") == "INVALID_DATA"  # type: ignore
        assert "Input should be a valid integer" in result[0].get("message")  # type: ignore
        assert "page" in result[0].get("message")  # type: ignore

    # # TEST
    # def test_invalid_song_id(self):
    #     repository = RepositoryMock()
    #     utils = Utils()
    #     result = get_drink_use_case(
    #         user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
    #         song_id="wrong_song_id",
    #         utils=utils,
    #         repository=repository,  # type: ignore
    #     )
    #     assert result[0].get("code") == "INVALID_DATA"  # type: ignore
    #     assert "Input should be a valid UUID" in result[0].get("message")  # type: ignore
    #     assert "song_id" in result[0].get("message")  # type: ignore

    # # TEST
    # def test_song_not_found(self):
    #     def find_song_by_id(song_id):
    #         return None

    #     repository = RepositoryMock()
    #     repository.songs.find_by_id = find_song_by_id  # type: ignore
    #     utils = Utils()
    #     result = get_drink_use_case(
    #         user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
    #         song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
    #         utils=utils,
    #         repository=repository,  # type: ignore
    #     )
    #     assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
    #     assert result[0].get("message") == "Song not found."  # type: ignore

    # # TEST
    # def test_song_from_another_user(self):
    #     def find_song_by_id(song_id):
    #         return helpers.CreateDotDict(
    #             {
    #                 "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
    #                 "user_id": "c4b0aab0-9675-49f9-9e9c-5834910b0dfb",
    #             }
    #         )

    #     repository = RepositoryMock()
    #     repository.songs.find_by_id = find_song_by_id  # type: ignore
    #     utils = Utils()
    #     result = get_drink_use_case(
    #         user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
    #         song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
    #         utils=utils,
    #         repository=repository,  # type: ignore
    #     )
    #     assert result[0].get("code") == "SONG_NOT_FOUND"  # type: ignore
    #     assert result[0].get("message") == "Song not found."  # type: ignore

    # # TEST
    # def test_success(self):
    #     def find_song_by_id(song_id):
    #         return helpers.CreateDotDict(
    #             {
    #                 "id": "f551219f-da27-4d6d-9d31-907a015a5b45",
    #                 "user_id": "2a253332-f9d5-4924-9c80-7856ee71e852",
    #             }
    #         )

    #     def find_kit_by_id(kit_id):
    #         return helpers.CreateDotDict({"id": "636800dd-54b8-4284-8904-854fe4f01966"})

    #     repository = RepositoryMock()
    #     repository.songs.find_by_id = find_song_by_id  # type: ignore
    #     repository.kits.find_by_id = find_kit_by_id  # type: ignore
    #     utils = Utils()
    #     result = get_drink_use_case(
    #         user_id="2a253332-f9d5-4924-9c80-7856ee71e852",
    #         song_id="f551219f-da27-4d6d-9d31-907a015a5b45",
    #         utils=utils,
    #         repository=repository,  # type: ignore
    #     )
    #     assert result.get("song") is not None  # type: ignore
