import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { MEALS } from "../Data/Data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../Components/ButtonHeader";

const ListItem = (props) => {
  return (
    <View style={styles.list}>
      <Text style={{ fontFamily: "open-sens" }}>{props.children}</Text>
    </View>
  );
};

const MealDetail = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={{ fontFamily: "open-sens" }}>{selectMeal.duration}m</Text>
        <Text style={{ fontFamily: "open-sens" }}>
          {selectMeal.complexity.toUpperCase()}
        </Text>
        <Text style={{ fontFamily: "open-sens" }}>
          {selectMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
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
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sens-bold",
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
