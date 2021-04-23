import React from 'react'
import Filters from './src/components/Filters'
import AddTodo from './src/components/AddTodo'
import VisibleTodoList from './src/components/TodoList'
import VisibleDiffTodoList from './src/components/TodoListDiff'
import {Provider} from 'react-redux'
import rootReducer from './src/reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        <Filters />
        <VisibleTodoList />
        <VisibleDiffTodoList />
        <AddTodo />
    </Provider>
)

export default App
