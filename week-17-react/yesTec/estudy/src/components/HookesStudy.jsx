import React,{useState} from "react";
import { Button } from "react-bootstrap";
 const Header=()=>{
    const [color,setColor]=useState('green')
    const [count,setCount]=useState(0)
    const changeColor=()=>{
        setColor("red")
    }
    const incr=()=>{
        setCount(count+1)
    }
    const decr=()=>{
        setCount(count-1)
    }
    
    return(
        <>
        <h1>usestate hook in react</h1>
        <h2>my fav color is {color}</h2>
        <Button onClick={changeColor}>change color</Button>

        <h1>counter is {count}</h1>
        <Button onClick={incr} className="m-2 bg-success">+</Button>
        <Button onClick={decr} className="m-2 bg-danger">-</Button>
        </>
    )
 }
 export default Header