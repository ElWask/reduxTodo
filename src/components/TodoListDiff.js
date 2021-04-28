import React from "react";
import { connect } from "react-redux";
import { FlatList, Text, View, StyleSheet } from "react-native";

const mapStateToProps = ({ todos }) => ({ todos: todos });

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.text}>
      {"\u2B24"} {text}
    </Text>
  </View>
);

const TodoListDiff = ({ todos, toggleTodo }) => (
  <FlatList
    style={styles.list}
    data={todos}
    renderItem={({ item }) => (
      <Item {...item} onClick={() => toggleTodo(item.id)} />
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  item: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  list: {
    display: "flex",
    margin: 20,
  },
});
/*#5 La fonction Connect() va connecter le composant React au Store de Redux */
export default connect(mapStateToProps)(TodoListDiff);
