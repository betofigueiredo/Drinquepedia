from flask_sqlalchemy import SQLAlchemy

from .drinks.drinks_repository import DrinksRepository


class Repository:
    def __init__(self, db: SQLAlchemy):
        self.drinks = DrinksRepository(db)
