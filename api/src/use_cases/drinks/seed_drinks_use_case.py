import math

import pandas as pd
from flask_sqlalchemy import SQLAlchemy
from models import (
    Category,
    Drink,
    DrinkCategory,
    Ingredient,
    IngredientType,
    PreparationStep,
)


def get_alcoholic_content(old_value: str) -> str:
    options = {"Baixo": "LOW", "Médio": "MEDIUM", "Alto": "HIGH", "Zero": "ZERO"}
    return options.get(old_value, "UNKNOWN")


def get_difficulty(old_value: str) -> str:
    options = {"Fácil": "EASY", "Média": "MEDIUM", "Difícil": "HARD"}
    return options.get(old_value, "UNKNOWN")


def get_decoration(old_ingredients: str) -> str:
    if "decorar" in old_ingredients:
        return old_ingredients.split("<BR>")[-1].replace("• ", "")
    else:
        return None


def get_ingredient_unit_of_measurement(old_ingredient: str) -> str:
    old_ingredient = old_ingredient.replace("• ", "")
    old_ingredient = old_ingredient.replace("\n", "")

    if old_ingredient == "":
        return {"unit": None, "quantity": None, "ingredient": None}

    if "decorar" in old_ingredient:
        return {"unit": None, "quantity": None, "ingredient": None}

    units = [
        "Splash",
        "splash",
        "Gema",
        "gema",
        "Gemas",
        "gemas",
        "Gota",
        "gota",
        "Gotas",
        "gotas",
        "Folha",
        "folha",
        "Folhas",
        "folhas",
        "Colher de bar",
        "colher de bar",
        "Colheres de bar",
        "colheres de bar",
        "colher de chá",
        "colheres de chá",
        "colheres",
        "colher de sopa",
        "colheres de sopa",
        "fatia",
        "fatia grossa",
        "fatias",
        "de uma fatia",
        "cubo",
        "cubos médios",
        "pedaço pequeno",
        "pote",
        "shot",
        "dash",
        "lata",
        "Pá",
        "pá",
        "Pás",
        "pás",
        "gomos",
        "pitada",
        "squeezes",
        "bola",
        "bolas",
        "rodela",
        "ramos",
        "torrão",
    ]

    for unit in units:
        if " " + unit + " " in old_ingredient:
            quantity = old_ingredient[0 : old_ingredient.index(unit)].strip()
            ingredient = old_ingredient.split(unit + " ")[1]
            if ingredient[:3] == "de ":
                ingredient = ingredient[3:]
            return {
                "unit": unit,
                "quantity": old_ingredient[0],
                "ingredient": ingredient,
            }

    if " oz " in old_ingredient:
        pieces = old_ingredient.split(" ")
        ml = 0
        ingredient = ""
        for piece in pieces:
            if "oz" in piece:
                for i in range(pieces.index(piece) + 1, len(pieces)):
                    ingredient += pieces[i] + " "
                break
            oz = {
                "1": 30,
                "1/2": 15,
                "1/4": 7.5,
                "1/3": 10,
                "3/4": 22.5,
                "2": 60,
                "3": 90,
                "4": 120,
                "5": 150,
                "6": 180,
                "7": 210,
            }
            ml += oz.get(piece, 0)
        if ingredient[:3] == "de ":
            ingredient = ingredient[3:]
        ingredient = ingredient.strip()
        return {"unit": "ml", "quantity": str(math.floor(ml)), "ingredient": ingredient}

    is_number = old_ingredient[0].isdigit()
    if is_number is False:
        return {"unit": None, "quantity": None, "ingredient": old_ingredient}

    quantity = old_ingredient.split(" ")[0]
    ingredient = old_ingredient.replace(quantity, "")
    ingredient = ingredient.strip()
    return {"unit": None, "quantity": quantity, "ingredient": ingredient}


def get_ingredients(old_ingredients: str) -> str:
    ingres = []
    splitted = old_ingredients.split("<BR>")
    order = 0
    for ingredient in splitted:
        data = get_ingredient_unit_of_measurement(ingredient)
        if data.get("ingredient"):
            order += 1
            ingres.append(
                {
                    "order": order,
                    "quantity": data.get("quantity"),
                    "unit_of_measurement": data.get("unit"),
                    "ingredient_type": data.get("ingredient"),
                }
            )
    return ingres


def get_preparation_steps(old_preparation: str) -> str:
    splitted = old_preparation.split("<BR>")
    result = []
    order = 0

    for preparation_step in splitted:
        clear = preparation_step
        clear = clear.replace("• ", "")
        clear = clear.replace("\n", "")

        if clear != "":
            order += 1
            result.append({"order": order, "description": clear})

    return result


def get_description(old_description: str) -> str:
    return old_description.replace("<BR>", "\n")


def get_categories(old_categories: str) -> str:
    return old_categories.split(",")


def seed_drinks_use_case(
    db: SQLAlchemy,
) -> bool:
    df = pd.read_csv("/app/old-data/drinquepedia_old_db.csv")

    for _, row in df.iterrows():
        old_id = row.get("id")
        name = row.get("nome")
        calories = row.get("calorias")
        alcoholic_content = get_alcoholic_content(row.get("teor"))
        difficulty = get_difficulty(row.get("dificuldade"))
        description = get_description(row.get("sobreodrink"))
        decoration = get_decoration(row.get("ingredientes"))
        preparation_steps = get_preparation_steps(row.get("preparo"))
        ingredients = get_ingredients(row.get("ingredientes"))
        categories = get_categories(row.get("categorias"))
        # TODO: historia = row.get("historia")
        # TODO: dicas = row.get("dicas")

        drink = Drink(
            old_id=old_id,
            name=name.title(),
            calories=calories,
            alcoholic_content=alcoholic_content,
            difficulty=difficulty,
            description=description,
            decoration=decoration,
        )

        db.session.add(drink)
        db.session.flush()
        created_drink = drink
        db.session.commit()

        for preparation_step in preparation_steps:
            step = PreparationStep(
                order=preparation_step.get("order"),
                description=preparation_step.get("description"),
                drink_id=created_drink.id,
            )
            db.session.add(step)
            db.session.commit()

        for ingredient in ingredients:
            query = db.select(IngredientType).where(
                IngredientType.name == ingredient.get("ingredient_type")
            )
            existing_category = db.session.scalar(query)
            if existing_category is None:
                new_category = IngredientType(
                    name=ingredient.get("ingredient_type"),
                )
                db.session.add(new_category)
                db.session.flush()
                existing_category = new_category
                db.session.commit()
            ingred = Ingredient(
                order=ingredient.get("order"),
                quantity=ingredient.get("quantity"),
                unit_of_measurement=ingredient.get("unit_of_measurement"),
                ingredient_type_id=existing_category.id,
                drink_id=created_drink.id,
            )
            db.session.add(ingred)
            db.session.commit()

        for category in categories:
            category = category.strip()
            query = db.select(Category).where(Category.name == category)
            existing_category = db.session.scalar(query)
            if existing_category is None:
                new_category = Category(
                    name=ingredient.get("ingredient_type"),
                )
                db.session.add(new_category)
                db.session.flush()
                existing_category = new_category
                db.session.commit()
            category_link = DrinkCategory(
                drink_id=created_drink.id,
                category_id=existing_category.id,
            )
            db.session.add(category_link)
            db.session.commit()

    return {"done": True}, 200
