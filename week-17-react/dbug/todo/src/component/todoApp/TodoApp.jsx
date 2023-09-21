import React, { Component } from 'react'
import './TodoApp.css'

export class TodoApp extends Component {
    state={
        input:"",
        items:[]
    }
    handleChange=(event)=>{
        // alert('hai')
        this.setState({
            input:event.target.value
        })

    }
    storeItems=(event)=>{
        event.preventDefault()
        const {input}=this.state
        // const allItems=this.state.items
        // allItems.push(input)
        this.setState({
            items:[...this.state.items,input],
            input:""
        })
    }

    deleteItem=(key)=>{
        this.setState({
            items:this.state.items.filter((data,index)=>index !== key)
        })
    }
    render() {
        const {input,items}=this.state
        console.log(items);
        return (
            <div className='todo-container'>
                <form action="" className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder='Enter items' />
                </form>


                <ul>
                    {items.map((value,index)=>(
                        <div>
                        <li key={index}><input type="checkbox" name="" id="" />{value} <i class="fas fa-edit"></i><i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteItem(index)}></i></li>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoApp