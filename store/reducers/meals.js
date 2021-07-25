import { MEALS } from "../../Data/Data";

const initialState = {
  meals: MEALS,
  filtersMeals: MEALS,
  favoritesMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
