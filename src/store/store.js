import { createStore } from 'redux'; 
import { ACTIONS } from './action';

const initialState = {
  todosList: JSON.parse(localStorage.getItem('todosList')) || [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO: 
      return {
        todosList: [action.todo, ...state.todosList], 
      }
    case ACTIONS.REMOVE_TODO: 
      const newTodosList = [...state.todosList
        .map(todo => {
          if (todo.id === action.id) {
            todo.done = !todo.done; 
            if (todo.deleteTime === 0) {
              todo.deleteTime = Date.now()
            } else {
              todo.deleteTime = 0; 
            }
          }
          return todo;
        })].sort((a,b) => a.deleteTime - b.deleteTime)
      return {
        todosList: newTodosList,
      }
    case ACTIONS.DELETE_TODO:
      return {
        todosList: [...state.todosList].filter(todo => todo.id !== action.id)
      }
    default: 
     return state; 
  }
}

const store = createStore(reducer); 

export default store;