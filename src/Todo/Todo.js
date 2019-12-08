import React, { useEffect, useRef } from 'react';
import './Todo.scss'

const Todo = ({value, done, id, deleteTime, removeTodo, deleteTodo, todosList}) => {

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todosList
      .filter(todo => !todo.done)))
  }, [todosList])

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
                  "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let timerRef = useRef(); 
    
  const changeTodoStatus = () => {
    removeTodo(id)
    if (!done) {
      let deleteTimer = setTimeout(() => deleteTodo(id), 60000); 
      timerRef.current = deleteTimer;
    } else {
      clearTimeout(timerRef.current)
    }
  } 

  return (
    <div className={done ? 'todo todo-removed' : 'todo'}>
      <button 
        className={done ? "todo__button-checked todo__button" : "todo__button"}
        onClick={changeTodoStatus}
      >
        {done ? <img className='todo__button-img' src='./img/tick.svg' alt="success" /> : null}
      </button>
      <span className={`todo__value ${done ? 'todo__checked' : null}`}>{value}</span>
      <span 
        className={done ? 'todo__date todo__date-vizible' : 'todo__date'}
      >
        {`${months[new Date(deleteTime).getMonth()]} 
          ${new Date(deleteTime).getDate()}, 
          ${new Date(deleteTime).getFullYear()}`}
      </span>
    </div>
  )
}

export default React.memo(Todo);
