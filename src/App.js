import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';
// import axios from 'axios';


class App extends Component {


  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Sacar la basura',
      //   completed: false,
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Cenar con amigos',
      //   completed: false,
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Reunión',
      //   completed: false,
      // }

    ]
  }




  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //     .then(res => this.setState({ todos: res.data }))
  // }

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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({
    //     todos: [...this.state.todos.filter
    //       (todo => todo.id !== id)]
    //   }))

  }

  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })

    // axios.post('https://jsonplaceholder.typicode.com/todos', {

    //   title,
    //   completed: false
    // })
    //   .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }


  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              <AddTodo AddTodo={this.AddTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
