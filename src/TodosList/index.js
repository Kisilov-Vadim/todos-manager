import TodosList from './TodosList';
import { connect } from 'react-redux'; 

const mapStateToProps = state => ({
  todosList: state.todosList,
})

const newTodos = connect(
  mapStateToProps,
  null
)(TodosList)

export { newTodos as TodosList };
