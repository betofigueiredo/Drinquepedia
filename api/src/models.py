import uuid

from infrastructure.core.database import db
from sqlalchemy.dialects.mysql import SMALLINT, TEXT, TINYINT
from sqlalchemy.orm import relationship


class Drink(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    old_id = db.Column(SMALLINT, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    calories = db.Column(SMALLINT)
    alcoholic_content = db.Column(db.String(10))
    difficulty = db.Column(db.String(10))
    description = db.Column(TEXT)
    decoration = db.Column(db.String(256))
    ingredients = relationship("Ingredient", back_populates="drink")
    preparation_steps = relationship("PreparationStep", back_populates="drink")
    categories = relationship("DrinkCategory", back_populates="drink")
    # hints = relationship("Hint", back_populates="drink")


class Ingredient(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    order = db.Column(TINYINT, nullable=False)
    quantity = db.Column(SMALLINT, nullable=False)
    ingredient_type_id = db.Column(db.String(36), db.ForeignKey("ingredient_type.id"))
    ingredient_type = relationship("IngredientType", back_populates="ingredients")
    drink_id = db.Column(db.String(36), db.ForeignKey("drink.id"))
    drink = relationship("Drink", back_populates="ingredients")


class IngredientType(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = db.Column(db.String(256), nullable=False)
    ingredients = relationship("Ingredient", back_populates="ingredient_type")


class PreparationStep(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    order = db.Column(TINYINT, nullable=False)
    description = db.Column(db.String(256), nullable=False)
    drink_id = db.Column(db.String(36), db.ForeignKey("drink.id"))
    drink = relationship("Drink", back_populates="preparation_steps")


class Category(db.Model):
    id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = db.Column(db.String(256), nullable=False)
    drinks = relationship("DrinkCategory", back_populates="category")


class DrinkCategory(db.Model):
    drink_id = db.Column(
        db.String(36), db.ForeignKey("drink.id"), primary_key=True, nullable=False
    )
    category_id = db.Column(
        db.String(36), db.ForeignKey("category.id"), primary_key=True, nullable=False
    )
    db.Index("id", "drink_id", "category_id")
    drink = relationship("Drink", back_populates="categories")
    category = relationship("Category", back_populates="drinks")


# class Hint(db.Model):
#     id = db.Column(db.String(36), primary_key=True, index=True, default=uuid.uuid4)
#     order = db.Column(TINYINT)
#     description = db.Column(db.String(256), nullable=False)
#     # drinqueId Int
#     # drinque Drinque @relation(fields: [drinqueId], references: [id])