import React from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

const TodoListItem = ({
  label, done, important, onDelete, onToggleDone, onToggleImportant,
}) => {
  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        role="button"
        tabIndex="0"
        onClick={onToggleDone}
        onKeyDown={onToggleDone}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  important: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
};

export default TodoListItem;
