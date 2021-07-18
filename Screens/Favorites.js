import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Favorites = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen !</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
