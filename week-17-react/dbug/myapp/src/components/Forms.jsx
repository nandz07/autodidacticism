
import React, { Component } from 'react'

export class Forms extends Component {
  state={
    firstName:'',
    lastName:''
  }
    onHandleChange=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=()=>{
        console.log(this.state);
    }
  render() {
    return (
      <form action="">
        <input onChange={this.onHandleChange} type="text" name="firstName" id="" value={this.state.firstName} />
        <input onChange={this.onHandleChange} type="text" name="lastName" id="" value={this.state.lastName} />
        <button type='button' onClick={this.onSubmit}>submit</button>
      </form>
    )
  }
}

export default Forms