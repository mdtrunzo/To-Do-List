import React, { Component } from 'react'

export class Title extends Component {

  h1Style = () => {

    return {
      color: 'white',
      margin: '20px',
      textAlign: 'center'
    }

  }
  render() {
    return (
      <div>
        <h1 style={this.h1Style()}>To Do List

        </h1>

      </div>
    )
  }
}



export default Title
