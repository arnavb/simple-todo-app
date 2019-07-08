import React from 'react';
import './TodoItem.css';

const TodoItem = props => {
  return <li className='todoItem'>{props.value}</li>;
};

export default TodoItem;
