export type TNutritions = {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
};

export type TFruit = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: TNutritions;
};
