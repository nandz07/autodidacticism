import React,{useLayoutEffect,useRef,useEffect} from 'react'

function LayoutEffect() {
let inputf=useRef(null)
useLayoutEffect(()=>{
    console.log(inputf.current.value)
},[])
useEffect(()=>{
    inputf.current.value="Hello"
},[])
  return (
    <div>
<input type="text" ref={inputf} name="" id="" value="Nandakumar"/>
    </div>
  )
}

export default LayoutEffect