import React from 'react';
import TodoList from './TodoList';
import './App.css';
import './fonts.css';

const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>Todo App</h1>
      <TodoList />
    </div>
  );
};

export default App;
