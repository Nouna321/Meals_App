import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../Data/Data";
import MealList from "../Components/MealList";

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filtersMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0 || !displayMeals) {
    <View style={styles.screen}>
      <Text style={{ fontFamily: "open-sens", color: "grey" }}>
        No Meals found.
      </Text>
    </View>;
  }
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
