import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    const submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/createUser",{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={submit}>
                    <h2>Add user</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter name' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" name="" id="" onChange={(e)=>setAge(e.target.value)} placeholder='Enter age' className='form-control'/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateUser