import React, { Component } from 'react';


export class TodoItem extends Component {

  getStyle = () => {

    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      cursor: 'pointer',
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none',
      transition: this.props.todo.completed ?
        '2s' : '2s'
    }

  }


  render() {

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {'  '}
          {this.props.todo.title}
          <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle} >x</button>
        </p>

      </div >
    )
  }
}

const btnStyle = {
  background: 'red',
  color: 'white',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
