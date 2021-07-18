import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Filters = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen !</Text>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
