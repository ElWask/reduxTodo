import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState("Useless Text");

  const addingTodo = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        onFocus={() => setText("")}
        value={text}
      />
      <Button title="Add Todo" onPress={addingTodo} />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  input: {
    flex: 1,
  },
});
/*#5 La fonction Connect() va connecter le composant React au Store de Redux */
export default connect()(AddTodo);
