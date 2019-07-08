import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  return <li className='todoItem' onClick={props.onClick}>{props.value}</li>;
};

export default TodoItem;
