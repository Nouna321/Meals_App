import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../Screens/Categories";
import CategoryMeals from "../Screens/CategoryMeals";
import MealDetail from "../Screens/MealDetail";
import Favorites from "../Screens/Favorites";
import Filters from "../Screens/Filters";
import Colors from "../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
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
      headerTitleStyle: {
        fontFamily: "open-sens-bold",
      },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetail: MealDetail,
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: "open-sens-bold",
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
    screen: FavNavigator,
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

const FiltersNav = createStackNavigator(
  {
    Filters: Filters,
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: "open-sens-bold",
      },
      headerTintColor: "white",
    },
  }
);

const MainNav = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNav,
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondColor,
      labelStyle: {
        fontFamily: "open-sens-bold",
        padding: 8,
      },
    },
  }
);

export default createAppContainer(MainNav);
