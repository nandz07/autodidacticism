// import React, { useState } from 'react'
import HOC from './HOC'

function Person2({money,handleIncrease}) {
    // const [money,setMoney]=useState(10)
    // const handleIncrease=()=>{
    //    setMoney(money*2)
    // }
  return (
    <div>
        <h1>Nandakumar is offering ${money}</h1>
        <button onClick={handleIncrease}>increase money</button>
    </div>
  )
}

export default HOC(Person2)