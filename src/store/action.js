export const ACTIONS = {
  ADD_TODO: 'ADD_TODO', 
  REMOVE_TODO: 'REMOVE_TODO',
  DELETE_TODO: 'DELETE_TODO'
}

export const addTodo = (todo) => ({ type: ACTIONS.ADD_TODO, todo }); 
export const removeTodo = (id) => ({ type: ACTIONS.REMOVE_TODO, id });
export const deleteTodo = (id) => ({ type: ACTIONS.DELETE_TODO, id }); 
