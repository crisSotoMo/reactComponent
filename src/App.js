import './App.css';
import React from 'react';
import TodoList from './Components/TodoList';

class App extends React.Component {
  render() {
    return (
      // Main container
      <div className="todo-list-app">
        <div className="todo-main-list">
          <h1>To Do:</h1>
          <TodoList />
        </div>
      </div>
    );
  }
}
      
export default App;

