import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

export default App;
