from typing import List

from pydantic import BaseModel, model_serializer


class KnowledgeSchema(BaseModel):
    id: str
    slug: str
    title: str
    subtitle: str
    description: str

    class ConfigDict:
        from_attributes = True


class CategorySchema(BaseModel):
    name: str

    class ConfigDict:
        from_attributes = True


class DrinkCategorySchema(BaseModel):
    category: CategorySchema

    @model_serializer
    def ser_model(self) -> str:
        return self.category.name

    class ConfigDict:
        from_attributes = True


class PreparationStepSchema(BaseModel):
    order: int
    description: str

    class ConfigDict:
        from_attributes = True


class IngredientTypeSchema(BaseModel):
    name: str

    @model_serializer
    def ser_model(self) -> str:
        return self.name

    class ConfigDict:
        from_attributes = True


class IngredientSchema(BaseModel):
    order: int
    quantity: str | None
    unit_of_measurement: str | None
    ingredient_type: IngredientTypeSchema

    class ConfigDict:
        from_attributes = True


class InstructionSchema(BaseModel):
    id: str
    old_id: int
    title: str
    subtitle: str
    description: str

    class ConfigDict:
        from_attributes = True


class DrinkInstructionSchema(BaseModel):
    instruction: InstructionSchema

    @model_serializer
    def ser_model(self) -> InstructionSchema:
        return self.instruction

    class ConfigDict:
        from_attributes = True


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
    preparation_steps: List[PreparationStepSchema]
    categories: List[DrinkCategorySchema]
    instructions: List[DrinkInstructionSchema]

    class ConfigDict:
        from_attributes = True


class DrinkHighlightSchema(BaseModel):
    drink: DrinkSchema

    @model_serializer
    def ser_model(self) -> DrinkSchema:
        return self.drink

    class ConfigDict:
        from_attributes = True


class HighlightSchema(BaseModel):
    id: str
    old_id: int
    type: str
    title: str
    subtitle: str
    description: str
    drinks: List[DrinkHighlightSchema]

    class ConfigDict:
        from_attributes = True
