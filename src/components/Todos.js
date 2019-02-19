import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  markComplete = () => {
    console.log('From App js')
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ))
  }
}


export default Todos;
