import {combineReducers} from 'redux'
import {VisibilityFilters} from '../actions'

const INIT_STATE = [
    {
        id: 1,
        text: "Make 🍝",
        completed: false
    },
    {
        id: 2,
        text: "Walk the 🐶",
        completed: false
    },
    {
        id: 3,
        text: "Go to the 🛒",
        completed: true
    }
]

/* ensemble des différents reducers 
** le premier reducers todos va prendre en paramettre initial INIT_STATE
** le 2eme reducers va prendre la constante SHOW ALL comme valeur inital
*/
export default combineReducers({
    /* Dans ce cas nous avons une liste qui,
    ** pour chaque actions, va changer sa structure 
    ** (c'est faux car elle est immutable, en fait elle va en recréer une) 
    */
    todos: (state = INIT_STATE, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            case 'TOGGLE_TODO':
                return state.map(todo =>
                    todo.id === action.id ? {...todo, completed: !todo.completed} : todo
                )
            default:
                return state
        }
    },
    /* Ici on aura un filtre avec différents état présent dans l'attribut filter de action  */
    visibilityFilter: (state = VisibilityFilters.SHOW_ALL, action) => {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                return action.filter
            default:
                return state
        }
    }
})
