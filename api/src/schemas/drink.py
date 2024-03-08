from infrastructure.core.database import ma
from marshmallow import fields, post_dump
from marshmallow_sqlalchemy import auto_field
from models import Category, Drink, DrinkCategory, Ingredient, IngredientType


class DrinkSchema(ma.SQLAlchemySchema):
    id = auto_field()
    old_id = auto_field()
    name = auto_field()
    calories = auto_field()
    alcoholic_content = auto_field()
    difficulty = auto_field()
    description = auto_field()
    decoration = auto_field()
    ingredients = fields.Nested("IngredientSchema", many=True)
    preparation_steps = auto_field()
    categories = fields.Nested("DrinkCategorySchema", many=True)

    class Meta:
        model = Drink


class IngredientSchema(ma.SQLAlchemySchema):
    order = auto_field()
    quantity = auto_field()
    ingredient_type = fields.Nested("IngredientTypeSchema")

    class Meta:
        model = Ingredient


class IngredientTypeSchema(ma.SQLAlchemySchema):
    name = auto_field()

    @post_dump()
    def make_object(self, data: dict[str, str]) -> str:
        return data["name"]

    class Meta:
        model = IngredientType


class CategorySchema(ma.SQLAlchemySchema):
    name = auto_field()

    class Meta:
        model = Category


class DrinkCategorySchema(ma.SQLAlchemySchema):
    category = fields.Nested(CategorySchema)

    @post_dump()
    def make_object(self, data: dict[str, CategorySchema]) -> dict[str, str]:
        return {**data["category"]}

    class Meta:
        model = DrinkCategory
