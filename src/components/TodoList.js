import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'
import CheckBox from '@react-native-community/checkbox';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

const Item = ({ onClick, completed, text }) => (
    <View 
        style={styles.item}
    >
        <Text style={styles.text}>{text}</Text>
        <CheckBox
            value={completed}
            onValueChange={onClick}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)