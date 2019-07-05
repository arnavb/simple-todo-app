import React, { Component } from 'react';
import TodoItem from './TodoItem';

let todoId = 1;

export default class TodoList extends Component {
  state = {
    todoValue: '',
    items: [],
  };

  onChange = event => {
    this.setState({
      todoValue: event.target.value,
    });
  };

  addItem = event => {
    const { todoValue, items } = this.state;

    this.setState({
      todoValue: '',
      items: [...items, { value: todoValue, id: todoId++ }],
    });

    event.preventDefault();
  };

  render() {
    const todoItems = this.state.items.map(todo => (
      <TodoItem value={todo.value} key={todo.id} />
    ));

    return (
      <div className='todoList'>
        <form onSubmit={this.addItem}>
          <input
            type='text'
            onChange={this.onChange}
            value={this.state.todoValue}
            placeholder='Enter a task'
          />
          <input type='submit' value='Add' />
        </form>

        <ul>{todoItems}</ul>
      </div>
    );
  }
}
