import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const {id}=useParams()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.post('http://localhost:3000/getUser/'+id).
        then(res=>{
           setName(res.data.name)
           setEmail(res.data.email)
           setAge(res.data.age)
        })
        .catch(err=>console.log(err))
    },[])

    const update=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3000/updateUser/"+id,{name,email,age})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={update}>
                    <h2>Update user</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id=""  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' className='form-control'/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" name="" id="" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter age' className='form-control'/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>

        </div>
  )
}

export default UpdateUser