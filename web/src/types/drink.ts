export type Ingredient = {
  order: number;
  quantity: number;
  ingredientType: string;
};

export type Drink = {
  id: string;
  oldId: number;
  name: string;
  alcoholicContent: "LOW" | "MEDIUM" | "HIGH";
  calories: number;
  categories: { name: string }[];
  decoration?: string;
  description?: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  ingredients: Ingredient[];
  preparationSteps: string[];
};
