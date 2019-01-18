import React, { Component } from 'react';
import uuid from 'uuid/v4';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-form/add-form';
import './app.css';

class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Drink tea'),
      this.createTodoItem('Drink tomato'),
    ],
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (label) => {
    this.setState(({ todoData }) => {
      const newTask = this.createTodoItem(label);
      const result = todoData.concat(newTask);
      return {
        todoData: result,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done'),
    }));
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'important'),
    }));
  };

  handleStatusFilter = (status) => {
    this.setState({
      filter: status,
    });
  };

  createTodoItem(label) {
    this.newItem = {
      id: uuid(),
      label,
      important: false,
      done: false,
    };
    return this.newItem;
  }

  render() {
    const { todoData, filter } = this.state;
    let output = todoData;
    if (filter === 'done') {
      output = todoData.filter(item => item.done === true);
    }
    if (filter === 'active') {
      output = todoData.filter(item => item.done === false);
    }
    const doneCount = todoData.filter(item => item.done === true).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter onStatusFilter={this.handleStatusFilter} active={filter} />
        </div>
        <TodoList
          todos={output}
          onDelete={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
