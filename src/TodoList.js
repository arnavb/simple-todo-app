import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import './fonts.css';

let todoId = 1;

export default class TodoList extends Component {
  state = {
    inputValue: '',
    items: [
      {
        value: 'A task',
        id: todoId++,
      },
      {
        value: 'Another task',
        id: todoId++,
      },
    ],
  };

  onChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTodo = event => {
    this.setState(({ inputValue, items }) => {
      if (inputValue.length === 0) {
        return null;
      }

      return {
        inputValue: '',
        items: [...items, { value: inputValue, id: todoId++ }],
      };
    });

    event.preventDefault();
  };

  deleteTodo = id => {
    this.setState(({ items }) => {
      return {
        items: items.filter(todo => todo.id !== id),
      };
    });
  };

  render() {
    const todoItems = this.state.items.map(todo => (
      <TodoItem
        value={todo.value}
        key={todo.id}
        onClick={() => this.deleteTodo(todo.id)}
      />
    ));

    return (
      <div className='todoList'>
        <form onSubmit={this.addTodo}>
          <input
            type='text'
            onChange={this.onChange}
            value={this.state.inputValue}
            className='todoInput'
            placeholder='Enter a task'
          />
          <button type='submit' className='addTodoButton'>
            Add
          </button>
        </form>

        <ul className='todoItems'>{todoItems}</ul>
      </div>
    );
  }
}
