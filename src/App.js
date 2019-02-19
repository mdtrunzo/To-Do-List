import React, { Component } from 'react';
import Todos from './components/Todos';
import Title from './components/Title';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Sacar la basura',
        completed: false,
      },
      {
        id: 2,
        title: 'Cenar con amigos',
        completed: false,
      },
      {
        id: 3,
        title: 'Reunión',
        completed: false,
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

  }

  render() {
    return (
      <div className="App">
        <Title />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
