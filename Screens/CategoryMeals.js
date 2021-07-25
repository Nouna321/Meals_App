import React from "react";
import { useSelector } from "react-redux";

import MealList from "../Components/MealList";
import Colors from "../constants/colors";

import { CATEGORIES } from "../Data/Data";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filtersMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList dataList={displayMeals} navigation={props.navigation} />;
};

export default CategoryMeals;

CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
