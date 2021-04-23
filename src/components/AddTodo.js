import React, { useState, useRef } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    const [text, setText] = useState("Useless Text");
    
    const addingTodo = () => {
        if (!text.trim()) {
            return
        }
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <View
            style={styles.content}
        >
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            <Button title="Add Todo" onPress={addingTodo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },
})

export default connect()(AddTodo)
