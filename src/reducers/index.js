import { combineReducers } from "redux";

const INIT_STATE = [
  {
    id: 1,
    text: "Make 🍝",
    completed: false,
  },
  {
    id: 2,
    text: "Walk the 🐶",
    completed: false,
  },
  {
    id: 3,
    text: "Go to the 🛒",
    completed: true,
  },
];

/* #3 Reducers, les mises à jour de l'état sont réalisées par des fonctions pures, appelées ***reducers***
 ** le reducers todos va prendre en paramettre initial INIT_STATE
 */
export default combineReducers({
  /* Dans ce cas nous avons une liste qui,
   ** pour chaque actions, va changer sa structure
   ** (c'est faux car elle est immutable, en fait elle va en recréer une)
   */
  todos: (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ];
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  },
});
