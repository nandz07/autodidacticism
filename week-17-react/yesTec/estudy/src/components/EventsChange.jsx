import React from "react";
import { Button } from "react-bootstrap";
 const Header=()=>{
    const clickHandle=()=>{
        alert('you clicked me !')
    }
    const dbClickHandle=(nname)=>{
       alert('Hello '+nname)
    }
    const onchandgeHandle=()=>{
        let a =document.getElementById('new').value
        console.log(a);
        document.getElementById('insert').innerHTML=`You have inserted: '${a}'`
    }
    const mouseOverHandle=()=>{
        document.getElementById('overMouse').style.color='red'
    }
    const mouseLeaveHandle=()=>{
        document.getElementById('overMouse').style.color='black'
    }
    return(
        <>
        <h1 className="bg-success">hai</h1>
        <Button onClick={clickHandle}>click me</Button>
        <h1 onDoubleClick={()=>dbClickHandle('Nandakumar')}>Double clilck</h1>
        <input onChange={onchandgeHandle} type="text" name="" id="new" />
        <h1 onMouseOver={mouseOverHandle} onMouseLeave={mouseLeaveHandle} id="overMouse">You can over mouse</h1>
        <h2 id="insert"></h2>
        </>
    )
 }
 export default Header