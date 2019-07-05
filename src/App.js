import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='title'>Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
