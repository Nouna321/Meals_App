import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Categories = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The categories Screen !</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
