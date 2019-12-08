import React from 'react';
import './app.scss'; 
import { Input } from './Input/index';
import { TodosList } from './TodosList/index';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='wrapper__title'>Task Manager</h1>
      <div className="todos"> 
        <h1 className='todos__title'>Work</h1>
        <Input />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
