import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ important, label }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  };
  return <span style={style}>{label}</span>;
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
};

export default TodoListItem;
