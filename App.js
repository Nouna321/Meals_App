import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sens": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sens-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App(props) {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoad(true)}
        onError={console.warn}
      />
    );
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
