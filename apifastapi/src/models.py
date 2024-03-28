import uuid

from infrastructure.core.settings import settings
from sqlalchemy import Column, ForeignKey, Index, String
from sqlalchemy.dialects.mysql import SMALLINT, TEXT, TINYINT
from sqlalchemy.orm import relationship


class Drink(settings.DB_BASE_MODEL):
    __tablename__ = "drink"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    old_id = Column(SMALLINT, nullable=False, index=True)
    name = Column(String(100), nullable=False)
    calories = Column(SMALLINT)
    alcoholic_content = Column(String(10))
    difficulty = Column(String(10))
    description = Column(TEXT)
    decoration = Column(String(256))
    ingredients = relationship("Ingredient", back_populates="drink", lazy="subquery")
    preparation_steps = relationship("PreparationStep", back_populates="drink")
    categories = relationship("DrinkCategory", back_populates="drink")
    highlights = relationship("DrinkHighlight", back_populates="drink", lazy="select")
    instructions = relationship(
        "DrinkInstruction", back_populates="drink", lazy="select"
    )


class Ingredient(settings.DB_BASE_MODEL):
    __tablename__ = "ingredient"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    order = Column(TINYINT, nullable=False)
    quantity = Column(String(50))
    unit_of_measurement = Column(String(36))
    ingredient_type_id = Column(String(36), ForeignKey("ingredient_type.id"))
    ingredient_type = relationship("IngredientType", back_populates="ingredients")
    drink_id = Column(String(36), ForeignKey("drink.id"))
    drink = relationship("Drink", back_populates="ingredients")


class IngredientType(settings.DB_BASE_MODEL):
    __tablename__ = "ingredient_type"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = Column(String(256), nullable=False)
    ingredients = relationship("Ingredient", back_populates="ingredient_type")


class PreparationStep(settings.DB_BASE_MODEL):
    __tablename__ = "preparation_step"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    order = Column(TINYINT, nullable=False)
    description = Column(String(256), nullable=False)
    drink_id = Column(String(36), ForeignKey("drink.id"))
    drink = relationship("Drink", back_populates="preparation_steps")


class Category(settings.DB_BASE_MODEL):
    __tablename__ = "category"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    name = Column(String(256), nullable=False)
    drinks = relationship("DrinkCategory", back_populates="category")


class DrinkCategory(settings.DB_BASE_MODEL):
    __tablename__ = "drink_category"

    drink_id = Column(
        String(36), ForeignKey("drink.id"), primary_key=True, nullable=False
    )
    category_id = Column(
        String(36), ForeignKey("category.id"), primary_key=True, nullable=False
    )
    Index("id", "drink_id", "category_id")
    drink = relationship("Drink", back_populates="categories")
    category = relationship("Category", back_populates="drinks")


class Highlight(settings.DB_BASE_MODEL):
    __tablename__ = "highlight"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    old_id = Column(SMALLINT, nullable=False, index=True)
    type = Column(String(30), nullable=False)
    title = Column(String(30), nullable=False)
    subtitle = Column(String(256), nullable=False)
    description = Column(TEXT)
    drinks = relationship("DrinkHighlight", back_populates="highlight")


class DrinkHighlight(settings.DB_BASE_MODEL):
    __tablename__ = "drink_highlight"

    drink_id = Column(
        String(36), ForeignKey("drink.id"), primary_key=True, nullable=False
    )
    highlight_id = Column(
        String(36), ForeignKey("highlight.id"), primary_key=True, nullable=False
    )
    Index("id", "drink_id", "highlight_id")
    drink = relationship("Drink", back_populates="highlights")
    highlight = relationship("Highlight", back_populates="drinks")


class Instruction(settings.DB_BASE_MODEL):
    __tablename__ = "instruction"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    old_id = Column(SMALLINT, nullable=False, index=True)
    title = Column(String(60), nullable=False)
    subtitle = Column(String(256), nullable=False)
    description = Column(TEXT)
    drinks = relationship(
        "DrinkInstruction", back_populates="instruction", lazy="select"
    )


class DrinkInstruction(settings.DB_BASE_MODEL):
    __tablename__ = "drink_instruction"

    drink_id = Column(
        String(36), ForeignKey("drink.id"), primary_key=True, nullable=False
    )
    instruction_id = Column(
        String(36), ForeignKey("instruction.id"), primary_key=True, nullable=False
    )
    Index("id", "drink_id", "instruction_id")
    drink = relationship("Drink", back_populates="instructions")
    instruction = relationship("Instruction", back_populates="drinks")


class Knowledge(settings.DB_BASE_MODEL):
    __tablename__ = "knowledge"

    id = Column(String(36), primary_key=True, index=True, default=uuid.uuid4)
    slug = Column(String(20), nullable=False)
    title = Column(String(60), nullable=False)
    subtitle = Column(String(256), nullable=False)
    description = Column(TEXT)
