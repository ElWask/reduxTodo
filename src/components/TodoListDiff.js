import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = ({ text }) => (
    <View 
        style={styles.item}
    >
        <Text style={styles.text}>{'\u2B24'} {text}</Text>
    </View>
)

const TodoList = ({ todos, toggleTodo }) => (
    <FlatList
        style={styles.list}
        data={todos}
        renderItem={({item}) => <Item {...item} onClick={() => toggleTodo(item.id)} />}
        keyExtractor={(item) => item.id.toString()}
    />
)

const styles = StyleSheet.create({
    text:{
        fontSize:20
    },
    item: {
        flex:1,
        display: 'flex',
        flexDirection:'row',
    },
    list:{
        display:"flex",
        margin:20,
    }
})
export default TodoList
