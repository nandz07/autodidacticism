import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users,setUsers]=useState([{}])
    useEffect(()=>{
        axios.get('http://localhost:3000/').
        then(res=>{
            setUsers(res.data)
        })
        .catch(err=>console.log(err))
    },[users])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3000/deleteUser/'+id).
        then(res=>{
            
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <Link to='/create' className='btn btn-success'>Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((user)=>(
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td><Link to={`/update/${user._id}`} className='btn btn-primary'>Update </Link>
                                    <Link onClick={()=>handleDelete(user._id)} className='btn btn-danger m'>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }  
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users