import React, { Component } from 'react';
import TodoItem from './TodoItem';

let todoId = 1;

export default class TodoList extends Component {
  state = {
    inputValue: '',
    items: [],
  };

  onChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addItem = event => {
    this.setState(({ inputValue, items }, props) => {
      return {
        inputValue: '',
        items: [...items, { value: inputValue, id: todoId++ }],
      };
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
            value={this.state.inputValue}
            placeholder='Enter a task'
          />
          <input type='submit' value='Add' />
        </form>

        <ul>{todoItems}</ul>
      </div>
    );
  }
}
