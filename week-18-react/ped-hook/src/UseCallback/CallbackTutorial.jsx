import React, { useCallback, useState } from 'react'
import Child from './Child'

function CallbackTutorial() {
    const [toggle,setToggle]=useState(false)
    const [data,setData]=useState("Learn from mistakes !")

    const returnComment=useCallback((name)=>{
        return data+name
    },[data])
  return (
    <div>
        <Child returnComment={returnComment} />

        <button 
        onClick={()=>{
            setToggle(!toggle)
        }}
        >Toogle</button>
        {toggle && <h1>Toggled</h1>}
        <button onClick={()=>setData('Belive in yourself')}> Change data</button>
    </div>
  )
}

export default CallbackTutorial