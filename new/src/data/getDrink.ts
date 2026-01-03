import { createServerFn } from '@tanstack/react-start';
import { drinks } from './drinks';

type Params = {
  drinkId: number;
};

export const getDrink = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    // Find the drink by its oldId
    const drinkData = drinks.find((d) => d.oldId === data.drinkId);

    if (!drinkData) {
      return { drink: null, similarDrinks: [] };
    }

    // Find similar drinks
    const similarDrinks = [];
    const { categories, ingredients } = drinkData;
    const ingredientTypes = ingredients.map((ing) => ing.ingredientType);

    // Scramble drinks array for randomness
    const shuffledDrinks = drinks
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    for (const drink of shuffledDrinks) {
      if (similarDrinks.length >= 5) break;

      if (drink.oldId === data.drinkId) continue;

      const hasCommonCategory = drink.categories.some((cat) =>
        categories.includes(cat),
      );
      const hasCommonIngredient = drink.ingredients.some((ing) =>
        ingredientTypes.includes(ing.ingredientType),
      );

      if (hasCommonCategory && hasCommonIngredient) {
        similarDrinks.push(drink);
      }
    }

    return { drink: drinkData, similarDrinks };
  });
