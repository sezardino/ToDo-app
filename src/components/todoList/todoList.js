import React from 'react';

import TodoListItem from '../todoListItem'
import './todoList.css';


const TodoList = ({todos, onDelete, onToggleDone, onToggleImportant}) => {

  const element = todos.map((item) => {
    const {id, ...others} = item;
  return (
          <li key={id} className="list-group-item">
            <TodoListItem {...others}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}/>
          </li>
          )})

  return (
    <ul className="list-group todo-list">
      {element}
    </ul>
  );
};

export default TodoList;