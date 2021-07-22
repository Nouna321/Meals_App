import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { MEALS } from "../Data/Data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../Components/ButtonHeader";

const MealDetail = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectMeal.title}</Text>
      <Button
        title="Go back to categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetail;

MealDetail.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("mark it");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
