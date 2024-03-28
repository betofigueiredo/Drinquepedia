from typing import List

from pydantic import BaseModel

# from models import (
#     Category,
#     Drink,
#     DrinkCategory,
#     DrinkHighlight,
#     DrinkInstruction,
#     Highlight,
#     Ingredient,
#     IngredientType,
#     Instruction,
#     Knowledge,
#     PreparationStep,
# )


class IngredientTypeSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


class CategorySchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


class DrinkCategorySchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


class PreparationStepSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class DrinkSchema(ma.SQLAlchemySchema):
#     id = auto_field()
#     old_id = auto_field()
#     name = auto_field()
#     calories = auto_field()
#     alcoholic_content = auto_field()
#     difficulty = auto_field()
#     description = auto_field()
#     decoration = auto_field()
#     ingredients = fields.Nested("IngredientSchema", many=True)
#     preparation_steps = fields.Nested("PreparationStepSchema", many=True)
#     categories = fields.Nested("DrinkCategorySchema", many=True)
#     instructions = fields.Nested("DrinkInstructionSchema", many=True)

#     class Meta:
#         model = Drink


# class IngredientTypeSchema(ma.SQLAlchemySchema):
#     name = auto_field()

#     @post_dump()
#     def make_object(self, data: dict[str, str], **kwargs: str) -> str:
#         return data["name"]

#     class Meta:
#         model = IngredientType


# class CategorySchema(ma.SQLAlchemySchema):
#     name = auto_field()

#     class Meta:
#         model = Category


# class DrinkCategorySchema(ma.SQLAlchemySchema):
#     category = fields.Nested(CategorySchema)

#     @post_dump()
#     def make_object(
#         self, data: dict[str, CategorySchema], **kwargs: CategorySchema
#     ) -> dict[str, str]:
#         return {**data["category"]}

#     class Meta:
#         model = DrinkCategory


# class PreparationStepSchema(ma.SQLAlchemySchema):
#     order = auto_field()
#     description = auto_field()

#     class Meta:
#         model = PreparationStep


class InstructionSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class InstructionSchema(ma.SQLAlchemySchema):
#     id = auto_field()
#     old_id = auto_field()
#     title = auto_field()
#     subtitle = auto_field()
#     description = auto_field()

#     class Meta:
#         model = Instruction


class DrinkInstructionSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class DrinkInstructionSchema(ma.SQLAlchemySchema):
#     instruction = fields.Nested(InstructionSchema)

#     @post_dump()
#     def make_object(
#         self, data: dict[str, InstructionSchema], **kwargs: InstructionSchema
#     ) -> dict[str, str]:
#         return {**data["instruction"]}

#     class Meta:
#         model = DrinkInstruction


class DrinkHighlightSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class DrinkHighlightSchema(ma.SQLAlchemySchema):
#     drink = fields.Nested(DrinkSchema)

#     @post_dump()
#     def make_object(
#         self, data: dict[str, DrinkSchema], **kwargs: DrinkSchema
#     ) -> dict[str, str]:
#         return {**data["drink"]}

#     class Meta:
#         model = DrinkHighlight


class HighlightSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class HighlightSchema(ma.SQLAlchemySchema):
#     id = auto_field()
#     old_id = auto_field()
#     type = auto_field()
#     title = auto_field()
#     subtitle = auto_field()
#     description = auto_field()
#     drinks = fields.Nested(DrinkHighlightSchema, many=True)

#     class Meta:
#         model = Highlight


class KnowledgeSchema(BaseModel):
    id: str

    class ConfigDict:
        from_attributes = True


# class KnowledgeSchema(ma.SQLAlchemySchema):
#     id = auto_field()
#     slug = auto_field()
#     title = auto_field()
#     subtitle = auto_field()
#     description = auto_field()

#     class Meta:
#         model = Knowledge


class IngredientSchema(BaseModel):
    order: int
    quantity: str | None
    unit_of_measurement: str | None

    class ConfigDict:
        from_attributes = True


# class IngredientSchema(ma.SQLAlchemySchema):
#     order = auto_field()
#     quantity = auto_field()
#     unit_of_measurement = auto_field()
#     ingredient_type = fields.Nested("IngredientTypeSchema")

#     class Meta:
#         model = Ingredient


class DrinkSchema(BaseModel):
    id: str
    old_id: int
    name: str
    calories: int
    alcoholic_content: str
    difficulty: str
    description: str
    decoration: str | None
    ingredients: List[IngredientSchema]
    # preparation_steps: List[PreparationStepSchema]
    # categories: List[CategorySchema]
    # highlights: List[DrinkHighlightSchema]
    # instructions: List[DrinkInstructionSchema]

    class ConfigDict:
        from_attributes = True


# class ArticleKeywordSchema(BaseModel):
#     keyword: KeywordSchema

#     @model_serializer
#     def ser_model(self) -> KeywordSchema:
#         return self.keyword

#     class ConfigDict:
#         from_attributes = True


# class ArticleSchema(BaseModel):
#     id: UUID4
#     content: str
#     published_at: datetime
#     keywords: List[ArticleKeywordSchema]

#     class ConfigDict:
#         from_attributes = True
