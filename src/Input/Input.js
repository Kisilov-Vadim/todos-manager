import React, {useState} from 'react';
import './Input.scss';
const uuidv1 = require('uuid/v1');

const Input = ({addTodo}) => {
  const [inputValue, setInputValue] = useState(''); 
  const [focus, setFocus] = useState(false);  

  const buttonState = () => {
    if (inputValue.length > 0) {
      return 'input-block__form-button button-active'
    } else if (focus) {
      return 'input-block__form-button button-focused';
    } else {
      return 'input-block__form-button'
    }
  }

  const underlineState = () => {
    if (inputValue.length > 0 || focus) {
      return 'underline-focused'
    } else {
      return 'underline'
    }
  }

  const submitTodo = (event) => {
    event.preventDefault();
    if (inputValue.length === 0) {
      return
    }

    let todo = {
      value: inputValue, 
      done: false,
      id: uuidv1(), 
      deleteTime: 0, 
    }
    setInputValue(''); 
    addTodo(todo);
  }

  return (
    <div>
      <form className='input-block__form' onSubmit={submitTodo}>
        <input 
          type='text' 
          className="input-block__form-input" 
          placeholder='Add new task' 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <button 
         className={buttonState()}
        >
          Add
        </button>
      </form>
      <div className={underlineState()}></div>
    </div>
  )
}

export default Input;
