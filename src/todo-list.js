import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <TodoListItem {...itemProps} />
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
};

export default TodoList;
