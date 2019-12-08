import React from 'react';
import {Todo} from './../Todo/index';

const Todos = ({ todosList }) => {

  return (
    <div className="todos-list">
      {todosList.map(({value, done, id, deleteTime}) => 
        <Todo 
          value={value} 
          done={done} 
          id={id} 
          deleteTime={deleteTime}
          key={id}
        />)
      }
    </div>
  )
}

export default Todos;
