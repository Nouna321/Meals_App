import React, { useEffect, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../store/actions/meals";

import ButtonHeader from "../Components/ButtonHeader";

const ListItem = (props) => {
  return (
    <View style={styles.list}>
      <Text style={{ fontFamily: "open-sens" }}>{props.children}</Text>
    </View>
  );
};

const MealDetail = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentFavoriteMeals = useSelector((state) =>
    state.meals.favoritesMeals.some((meal) => meal.id === mealId)
  );

  const selectMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({mealTitle: selectMeal.title})
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentFavoriteMeals });
  }, [currentFavoriteMeals]);

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
  //const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  //const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
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
