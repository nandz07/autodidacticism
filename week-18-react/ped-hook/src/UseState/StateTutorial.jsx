// import React,{useState} from 'react'

// function StateTutorial() {
//   const [count,setCount]=useState(0)
//   const inc=()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//         {count}
//       <button onClick={inc}>inc</button>
//     </div>
//   )
// }

// export default StateTutorial
import React,{useState} from 'react'

function StateTutorial() {
  const [inputvalue,setInputvalue]=useState('Hello world')
 const chageHandler=(event)=>{
  setInputvalue(event.target.value)
 }
  return (
    <div>
        {inputvalue}<br/>
      <input type="text" value={inputvalue} onChange={chageHandler} />
    </div>
  )
}

export default StateTutorial