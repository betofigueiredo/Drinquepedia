# type: ignore
import math

import pandas as pd
from flask_sqlalchemy import SQLAlchemy
from models import (  # noqa: F401
    Category,
    Drink,
    DrinkCategory,
    DrinkInstruction,
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
                "2/3": 20,
                "3/4": 22.5,
                "2": 60,
                "3": 90,
                "4": 120,
                "5": 150,
                "6": 180,
                "7": 210,
                "8": 240,
                "9": 270,
                "10": 300,
                "11": 330,
                "12": 360,
                "13": 390,
                "14": 420,
                "15": 450,
                "16": 480,
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
    if isinstance(old_description, str):
        return old_description.replace("<BR>", "\n")
    return None


def get_categories(old_categories: str):
    if isinstance(old_categories, str):
        return old_categories.split(",")
    return []


def get_instructions(old_instructions: str):
    result = []

    if not isinstance(old_instructions, str):
        return result

    all_instructions = {
        '/dicas/1"': "b5d8cb8a-ead4-4ca3-b938-dd96e3fc6873",
        '/dicas/2"': "6fdf06df-f78a-4aef-889f-703aba975360",
        '/dicas/3"': "bdd703df-7cb3-4505-9645-61c3ca6695bb",
        '/dicas/4"': "fe37b5eb-18e8-48c4-b750-c3febf7a2527",
        '/dicas/5"': "ac200107-65c3-4227-ae75-cf502d913f07",
        '/dicas/6"': "d69148a5-6599-4525-bbe9-68f0e705d4cd",
        '/dicas/7"': "8ef86270-57dd-4f4d-930c-3bca59c0ddcf",
        '/dicas/8"': "2e5163a1-4747-4f03-aa01-aec9ec4eda10",
    }

    for instruction_url, new_instruction_id in all_instructions.items():
        if instruction_url in old_instructions:
            result.append(new_instruction_id)

    return result


def seed_drinks_use_case(
    db: SQLAlchemy,
) -> bool:
    df = pd.read_csv("/app/old-data/drinquepedia_full_old_db.csv")

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
        categories = get_categories(row.get("categoria"))
        dicas = row.get("dicas")
        # TODO: historia = row.get("historia")

        print(f"Creating drink: {name}", flush=True)

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
            existing_ingredient_type = db.session.scalar(query)
            if existing_ingredient_type is None:
                ingredient_type = IngredientType(
                    name=ingredient.get("ingredient_type"),
                )
                db.session.add(ingredient_type)
                db.session.flush()
                existing_ingredient_type = ingredient_type
                db.session.commit()
            ingred = Ingredient(
                order=ingredient.get("order"),
                quantity=ingredient.get("quantity"),
                unit_of_measurement=ingredient.get("unit_of_measurement"),
                ingredient_type_id=existing_ingredient_type.id,
                drink_id=created_drink.id,
            )
            db.session.add(ingred)
            db.session.commit()

        for category in categories:
            category = category.strip()
            query = db.select(Category).where(Category.name == category)
            existing_category = db.session.scalar(query)
            if existing_category is None:
                new_category = Category(name=category)
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

        instructions = get_instructions(dicas)
        for instruction in instructions:
            instruction_link = DrinkInstruction(
                drink_id=created_drink.id,
                instruction_id=instruction,
            )
            db.session.add(instruction_link)
            db.session.commit()

    return {"done": True}, 200
