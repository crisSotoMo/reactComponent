import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id:1, text: 'Sacar basura'},
        {id:2, text: 'Pasear perro'},
        {id:2, text: 'Cerrar puerta'},
      ],
      newTodo:'',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO</h1>
          <ul>
            {this.state.todos.map((todo) => {
              return (
              <TodoItem key={todo.id} text={todo.text} />
              );
            })}
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            value={this.state.newTodo}
            onChange={this.handleChange}>
            </input>
            <button type="submit">Add TODO</button>
          </form>
        </header>
      </div>
    );
  }

  handleChange = (Event) => {
    this.setState({newTodo: Event.target.value});
  }

  handleSubmit = Event => {
    Event.preventDefault();
    this.setState( prevState => ({}));
  }
}

export default App;
