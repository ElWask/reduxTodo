import React, { useState,useEffect } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Filters from '../components/Filters'
import CheckBox from '@react-native-community/checkbox';

const mapStateToProps = ({todos}) => ({todos: todos})

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

const TodoList = ({ todos, toggleTodo }) => {
    const [list, setList] = useState([])
    useEffect(() => {
        setList(todos)
    }, [todos])

    return (<>
        <Filters {...{todos,setList}} />
        <FlatList
            style={styles.list}
            data={list}
            renderItem={({item}) => <Item {...item} onClick={() => toggleTodo(item.id)} />}
            keyExtractor={(item) => item.id.toString()}
        />
    </>)
}
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

export default connect(mapStateToProps)(TodoList)