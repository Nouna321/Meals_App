import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Categories from "../Screens/Categories";
import CategoryMeals from "../Screens/CategoryMeals";
import MealDetail from "../Screens/MealDetail";

const MealsNavigator = createStackNavigator({
  Categories: Categories,
  CategoryMeals: {
    screen: CategoryMeals,
  },
  MealDetail: MealDetail,
});

export default createAppContainer(MealsNavigator);
