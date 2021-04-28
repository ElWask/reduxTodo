/*#2 l'état de l'application est en mode lecture seule 
* et ne peut pas être modifié directement
*/

let nextTodoId = 4;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
