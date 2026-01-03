export type Ingredient = {
  order: number;
  quantity: string | null;
  unitOfMeasurement: string | null;
  ingredientType: string;
};

export type PreparationStep = {
  order: number;
  description: string;
};

export type Instruction = {
  id: string;
  oldId: number;
  title: string;
  subtitle: string;
  description: string | null;
};

export const ALCOHOLIC_CONTENTS = ['LOW', 'MEDIUM', 'HIGH', 'ZERO'] as const;
export type AlcoholicContent = (typeof ALCOHOLIC_CONTENTS)[number];

export const DIFFICULTIES = [
  'BEGINNER',
  'EASY',
  'MEDIUM',
  'HARD',
  'VERY_HARD',
] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export type Drink = {
  id: string;
  oldId: number;
  name: string;
  alcoholicContent: AlcoholicContent;
  calories: number;
  categories: Array<string>;
  decoration: string | null;
  description: string | null;
  difficulty: Difficulty;
  ingredients: Array<Ingredient>;
  preparationSteps: Array<PreparationStep>;
  instructions: Array<Instruction>;
};
