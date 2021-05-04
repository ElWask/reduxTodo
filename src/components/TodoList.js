import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import Filters from "../components/Filters";
import Checkbox from 'expo-checkbox';
import { toggleTodo } from "../actions";

/*#5 donne accès au Store en retournant les données demandées par le composant */
/*#5 dispatch permet d'effectuer les actions dans le store */
const mapStateToProps = ({ todos }) => ({ todos: todos });

const Item = ({ onClick, completed, text }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
    <Checkbox style={styles.checkbox} value={completed} onValueChange={onClick} />
  </View>
);

const TodoList = ({ todos, dispatch }) => {
  const [list, setList] = useState(todos);

  useEffect(() => {
    setList(todos);
  }, [todos]);

  return (
    <>
      <Filters {...{ todos, setList }} />
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <Item {...item} onClick={() => dispatch(toggleTodo(item.id))} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};
const {height, width} =  Dimensions.get("window")
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
  checkbox:{
    marginTop:"auto"
  }
});
/*#5 La fonction Connect() va connecter le composant React au Store de Redux */
export default connect(mapStateToProps)(TodoList);
