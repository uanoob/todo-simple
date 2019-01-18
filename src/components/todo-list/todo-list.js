import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos, onDelete, onToggleDone, onToggleImportant,
}) => (
  <ul className="list-group todo-list">
    {todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      );
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      important: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
};

export default TodoList;
