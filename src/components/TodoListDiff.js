import React from "react";
import { connect } from "react-redux";
import { FlatList, Text, View, StyleSheet } from "react-native";

/*#5 donne accès au Store en retournant les données demandées par le composant */
const mapStateToProps = ({ todos }) => ({ list: todos });

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.text}>
      {"\u2B24"} {text}
    </Text>
  </View>
);

const TodoListDiff = ({ list, toggleTodo }) => (
  <FlatList
    style={styles.list}
    data={list}
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
