import React, { Component } from 'react'
import './TodoApp.css'

export class TodoApp extends Component {
    state={
        input:""
    }
    handleChange=()=>{
        
    }
    render() {
        return (
            <div className='todo-container'>
                <form action="" className="input-section">
                    <h1>Todo App</h1>
                    <input type="text" value={this.state.input} onChange={this.handleChange} placeholder='Enter items' />
                </form>


                <ul>
                    <li>hai <i className="fa fa-trash" aria-hidden="true"></i></li>
                    <li>hai<i className="fa fa-trash" aria-hidden="true"></i></li>
                </ul>
            </div>
        )
    }
}

export default TodoApp