export type Ingredient = {
  order: number;
  quantity?: number;
  unitOfMeasurement?: string;
  ingredientType: string;
};

export type PreparationStep = {
  order: number;
  description: number;
};

export type Instruction = {
  id: string;
  oldId: number;
  title: string;
  subtitle: string;
  description?: string;
};

export const ALCOHOLIC_CONTENTS = ["LOW", "MEDIUM", "HIGH"] as const;
export type AlcoholicContent = (typeof ALCOHOLIC_CONTENTS)[number];

export const DIFFICULTIES = [
  "BEGINNER",
  "EASY",
  "MEDIUM",
  "HARD",
  "VERY_HARD",
] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export type Drink = {
  id: string;
  oldId: number;
  name: string;
  alcoholicContent: AlcoholicContent;
  calories: number;
  categories: string[];
  decoration?: string;
  description?: string;
  difficulty: Difficulty;
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
  instructions?: Instruction[];
};
