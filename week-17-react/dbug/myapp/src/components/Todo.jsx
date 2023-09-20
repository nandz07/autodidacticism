
import React, { Component } from 'react'

export class Todo extends Component {
  

  render() {
    return (
      <div>
        <h1>todo component</h1>
        <h2>{this.props.mystring}</h2>
      </div>
    )
  }
}

export default Todo