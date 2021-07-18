import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CategoryMeals = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMeals Screen !</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />

      <Button
        title="Go back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

export default CategoryMeals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
