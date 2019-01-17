import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

class App extends Component {
  state = {
    todoData: [
      {
        id: 1,
        label: 'Drink coffee',
        important: false,
      },
      {
        id: 2,
        label: 'Drink tea',
        important: true,
      },
      {
        id: 3,
        label: 'Drink tomato',
        important: false,
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const result = todoData.filter(item => item.id !== id);
      return {
        todoData: result,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
