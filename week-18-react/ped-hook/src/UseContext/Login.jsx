import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'

function Login() {
    const {setUsername}=useContext(AppContext)
  return (
    <div>
        <input type="text" name="" id="" 
        onChange={(event)=>{setUsername(event.target.value)}}
        />
    </div>
  )
}

export default Login