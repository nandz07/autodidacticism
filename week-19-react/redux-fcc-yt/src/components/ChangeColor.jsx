import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeColor} from '../features/theme'

function ChangeColor() {

    const [color,setColor]=useState()
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" name="" id="" onChange={e=>setColor(e.target.value)}/>
        <button onClick={()=>{dispatch(changeColor(color))}}>Change color</button>
    </div>
  )
}

export default ChangeColor