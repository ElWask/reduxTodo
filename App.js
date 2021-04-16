import React from 'react'
import Filters from './src/components/Filters'
import AddTodo from './src/containers/AddTodoContainer'
import VisibleTodoList from './src/containers/TodoListContainer'
import VisibleDiffTodoList from './src/containers/TodoListDiffContainer'
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
