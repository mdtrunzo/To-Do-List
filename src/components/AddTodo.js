import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: '' })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="title"
            placeholder="Agregar una tarea.."
            value={this.state.title}
            onChange={this.onChange}
          />
          <Button
            variant="danger"
            type="submit"
            value="submit">Agregar</Button>
        </form>
      </div>
    )
  }
}

export default AddTodo
