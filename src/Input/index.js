import Input from './Input';
import { addTodo } from '../store/action'; 
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)), 
})

const newInput = connect(
  null, 
  mapDispatchToProps
)(Input)

export { newInput as Input };
