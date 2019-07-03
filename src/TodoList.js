import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoValue: '',
      items: [],
    };
  }

  onChange = event => {
    this.setState({
      todoValue: event.target.value,
    });
  };

  addItem = event => {};

  render() {
    return (
      <div className='todoList'>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type='text'
            onChange={this.onChange}
            value={this.state.todoValue}
            placeholder='Enter a task'
          />
          <input type='submit' value='Add' />
        </form>
      </div>
    );
  }
}
