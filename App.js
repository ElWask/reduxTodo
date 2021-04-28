import React from "react";
import AddTodo from "./src/components/AddTodo";
import TodoList from "./src/components/TodoList";
import DiffTodoList from "./src/components/TodoListDiff";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers";
import { createStore } from "redux";

/*#1 création d'un store afin de stocker nos états, dans ce cas le todos []*/
const store = createStore(rootReducer);
/*#4 composant Provider afin de fournir le store aux composants imbriqués */
const App = () => (
  <Provider store={store}>
    <TodoList />
    <DiffTodoList />
    <AddTodo />
  </Provider>
);

export default App;
