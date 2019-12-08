import Todo from './Todo';
import { removeTodo, deleteTodo } from './../store/action';
import { connect } from 'react-redux'; 

const mapStateToProps = state => ({
  todosList: state.todosList, 
})

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)) 
})

const newTodo = connect (
  mapStateToProps, 
  mapDispatchToProps
)(Todo); 

export { newTodo as Todo }; 
