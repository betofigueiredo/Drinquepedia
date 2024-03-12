from infrastructure.core.database import ma
from marshmallow import fields, post_dump
from marshmallow_sqlalchemy import auto_field
from models import (
    Category,
    Drink,
    DrinkCategory,
    Highlight,
    Ingredient,
    IngredientType,
    PreparationStep,
)


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
    preparation_steps = fields.Nested("PreparationStepSchema", many=True)
    categories = fields.Nested("DrinkCategorySchema", many=True)

    class Meta:
        model = Drink


class IngredientSchema(ma.SQLAlchemySchema):
    order = auto_field()
    quantity = auto_field()
    unit_of_measurement = auto_field()
    ingredient_type = fields.Nested("IngredientTypeSchema")

    class Meta:
        model = Ingredient


class IngredientTypeSchema(ma.SQLAlchemySchema):
    name = auto_field()

    @post_dump()
    def make_object(self, data: dict[str, str], **kwargs: str) -> str:
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
    def make_object(
        self, data: dict[str, CategorySchema], **kwargs: CategorySchema
    ) -> dict[str, str]:
        return {**data["category"]}

    class Meta:
        model = DrinkCategory


class PreparationStepSchema(ma.SQLAlchemySchema):
    order = auto_field()
    description = auto_field()

    class Meta:
        model = PreparationStep


class HighlightSchema(ma.SQLAlchemySchema):
    id = auto_field()
    type = auto_field()
    title = auto_field()
    subtitle = auto_field()
    description = auto_field()
    drink = fields.Nested(DrinkSchema)

    class Meta:
        model = Highlight
