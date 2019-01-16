import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';

const App = () => {
  const todoData = [
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
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
