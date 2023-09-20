import React, { Component } from 'react';
import './App.css';

// import Todo from './components/Todo'
// import Counter from './components/counter'
// import Form from './components/Forms'
import List from './components/List'
 
class App extends Component {

state={
  mystring:"hello",
  mystring2:"nandu"
}
handleChange=()=>{
  this.setState({
    mystring:'nandakumar'
  })
}

  render() {
    return (
      <div className="">
        {/* <h1>{this.state.mystring}</h1>
        <button onClick={this.handleChange}>Change Text</button>
        <Todo mystring={this.state.mystring}></Todo> */}

        {/* <h1>Event</h1> */}
        {/* <Counter></Counter> */}
        {/* <Form></Form> */}
        <h1>List</h1>
        <List />
      </div>
    )
  }
}

export default App;
