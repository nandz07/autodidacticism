import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

function MemoTutorial() {
    const [data,setData]=useState(null)
    const [toggle,setToggle]=useState(true)
    
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data)
        })
    },[])
    const findLongestName=(comments)=>{
        if(!comments) return null

        let l=''
        for(let i=0;i<comments.length;i++){
            let cn=comments[i].name
            if(cn.length>l.length){
                l=cn
            }
        }
        console.log('completed the computation');
        return l
    }
    const getLongestName=useMemo(()=>findLongestName(data),[data])
  return (
    <div>
        <div>{getLongestName}</div>
        <button
        onClick={()=>{
            setToggle(!toggle)
        }}
        >Toggle</button>
        {toggle && <h1>Toggled</h1>}
    </div>
  )
}

export default MemoTutorial