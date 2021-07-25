import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ButtonHeader from "../Components/ButtonHeader";
import MealList from "../Components/MealList";

const Favorites = (props) => {
  const favMeals = useSelector((state) => state.meals.favoritesMeals);

  return <MealList dataList={favMeals} navigation={props.navigation} />;
};

export default Favorites;

Favorites.navigationOptions = (navData) => {
  return {
    headerTitle: "Your favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
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
