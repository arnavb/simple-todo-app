import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Todo App</h1>
        <TodoList />
      </div>
    );
  }
}
