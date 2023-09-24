import React from 'react'

function ClickHandler() {
    let clickHandler=(event,count =1 )=>{
        console.log('button clicked',count,event);
        alert("hai")}
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(event)=>clickHandler(event,5)}>Click 5</button>
    </div>
  )
}

export default ClickHandler