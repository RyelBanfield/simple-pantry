export type FormValues = { query: string };

export type ResultsType = {
  hits: [{
    recipe: {
      calories: number;
      cautions: string[];
      cuisineType: string[];
      dietLabels: string[];
      dishTypes: string[];
      healthLabels: string[];
      image: string;
      ingredientLines: string[];
      ingredients: {}[];
      label: string;
      mealType: string[];
    }
    _links: {
      self: {
        href: string;
      };
    };
  }];
};

export type RecipeType = {
  calories: number;
  cautions: string[];
  cuisineType: string[];
  dietLabels: string[];
  dishTypes: string[];
  healthLabels: string[];
  image: string;
  ingredientLines: string[];
  ingredients: {}[];
  label: string;
  mealType: string[];
};
