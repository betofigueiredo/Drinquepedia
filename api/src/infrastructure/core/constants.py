class Difficulties(dict):
    BEGINNER = "BEGINNER"
    EASY = "EASY"
    MEDIUM = "MEDIUM"
    HARD = "HARD"
    VERY_HARD = "VERY_HARD"

    def __getattr__(self, attr):
        try:
            return self[attr]
        except KeyError:
            return None


class AlcoholicContents(dict):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    def __getattr__(self, attr):
        try:
            return self[attr]
        except KeyError:
            return None


class Constants:
    def __init__(self):
        self.difficulties = Difficulties()
        self.alcoholic_contents = AlcoholicContents()


constants = Constants()
