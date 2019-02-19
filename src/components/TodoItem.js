import React, { Component } from 'react';


export class TodoItem extends Component {

  getStyle = () => {

    return {
      background: '#f4f4f4',
      padding: '20px',
      borderBottom: '1px #ccc dotted',
      cursor: 'pointer',
      background: this.props.todo.completed ?
        '#61DAFB' : '#f4f4f4',
      transition: this.props.todo.completed ?
        '1s' : '1s'
    }

  }


  render() {

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {'  '}
          {this.props.todo.title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this.props.todo.id)}>x</button>
        </p>

      </div >
    )
  }
}

const btnStyle = {
  background: 'red',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
