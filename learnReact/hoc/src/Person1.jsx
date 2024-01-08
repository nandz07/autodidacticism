// import React, { useState } from 'react'
import HOC from './HOC'

function Person1({money,handleIncrease}) {
    // const [money,setMoney]=useState(10)
    // const handleIncrease=()=>{
    //    setMoney(money*2)
    // }
  return (
    <div>
        <h1>Jimmy is offering ${money}</h1>
        <button onClick={handleIncrease}>increase money</button>
    </div>
  )
}

export default HOC(Person1)