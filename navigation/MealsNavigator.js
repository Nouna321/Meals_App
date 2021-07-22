import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../Screens/Categories";
import CategoryMeals from "../Screens/CategoryMeals";
import MealDetail from "../Screens/MealDetail";
import Favorites from "../Screens/Favorites";
import Colors from "../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: MealDetail,
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const tabScrenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScrenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScrenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
