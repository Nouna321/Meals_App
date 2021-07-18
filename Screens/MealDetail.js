import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const MealDetail = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetail Screen !</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
