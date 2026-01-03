import { createServerFn } from '@tanstack/react-start';
import { drinks } from './drinks';

type Params = {
  page?: number;
  category?: string;
  search?: string;
  calories?: string;
  alcoholicContent?: string;
};

export const getDrinks = createServerFn({ method: 'GET' })
  .inputValidator((data: Params) => data)
  .handler(async ({ data }) => {
    const page = data.page || 1;
    const category = data.category || '';
    const search = data.search || '';
    const calories = data.calories || '';
    const alcoholicContent = data.alcoholicContent || '';
    const perPage = category === 'caipirinhas' ? 50 : 20;

    const result = [];

    for (const drink of drinks) {
      let shouldInclude = true;

      // Handling for search term
      if (search) {
        shouldInclude =
          drink.name.toLowerCase().includes(search.toLowerCase()) ||
          drink.ingredients.some((ingredient) =>
            ingredient.ingredientType
              .toLowerCase()
              .includes(search.toLowerCase()),
          );
      }

      if (!shouldInclude) continue;

      // Handling for calories filter
      if (calories) {
        const [minStr, maxStr] = calories.split('-');
        const min = minStr ? parseInt(minStr, 10) : 0;
        const max = maxStr ? parseInt(maxStr, 10) : Infinity;
        shouldInclude = drink.calories >= min && drink.calories <= max;
      }

      if (!shouldInclude) continue;

      // Handling for alcoholic content filter
      if (alcoholicContent) {
        // const ALCOHOLIC_CONTENTS = ['LOW', 'MEDIUM', 'HIGH', 'ZERO'];
        shouldInclude = drink.alcoholicContent === alcoholicContent;
      }

      if (!shouldInclude) continue;

      // Special handling for caipirinhas category
      if (category && category === 'caipirinhas') {
        shouldInclude =
          drink.categories.includes('caipirinhas') ||
          drink.categories.includes('scaipirinhas');
      }

      // Handling for other categories
      if (category && category !== 'caipirinhas') {
        shouldInclude = drink.categories.includes(category.toLowerCase());
      }

      // Exclude caipirinhas and scaipirinhas if no category is specified
      if (!category) {
        shouldInclude =
          !drink.categories.includes('caipirinhas') &&
          !drink.categories.includes('scaipirinhas');
      }

      if (shouldInclude) {
        result.push(drink);
      }
    }

    const paginated = result.slice((page - 1) * perPage, page * perPage);

    return {
      drinks: paginated,
      metadata: {
        totalCount: result.length,
        page,
        perPage,
      },
    };
  });
