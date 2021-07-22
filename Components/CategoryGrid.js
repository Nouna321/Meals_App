import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 13,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sens-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
