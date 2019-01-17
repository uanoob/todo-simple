import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onMarkDone = () => {
    this.setState(state => ({
      done: !state.done,
    }));
  };

  onMarkImportant = () => {
    this.setState(state => ({
      important: !state.important,
    }));
  };

  render() {
    const { done, important } = this.state;
    const { label } = this.props;
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
          onClick={this.onMarkDone}
          onKeyDown={this.onMarkDone}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TodoListItem;
