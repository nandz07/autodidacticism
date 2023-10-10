import React,{useEffect,useState} from 'react'
import axios from 'axios'
function EffectTutorial() {
    const [data,setData]=useState('')
    const [count,setCount]=useState(0)
    const [status,setStatus]=useState(false)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setData(response.data[count].title)
            setStatus(false)
        })
    },[count])
    const inc=()=>{
        setStatus(true)
        setCount(count+1)
    }
      return (
        <div>
            {status ?'loading. . . . . . . . !':data}
            <div>

            {/* <span>{count+1}</span> {`|`} <span>{data}</span> */}
            </div>
            <br />
            <button onClick={inc}>count</button>
        </div>
      )
}

export default EffectTutorial