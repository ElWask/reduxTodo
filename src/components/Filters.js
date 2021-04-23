import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Filters = ({ todos, setList }) => (
  <View style={styles.content}>
    <Text>Filter: </Text>
    <View style={styles.btnContainer}>
      <Button title="All" onPress={() => setList(todos)} />
      <Button
        title="Active"
        onPress={() => setList(todos.filter((item) => !item.completed))}
      />
      <Button
        title="Completed"
        onPress={() => setList(todos.filter((item) => item.completed))}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  content: {
    margin: 20,
    marginTop: 50,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Filters;
