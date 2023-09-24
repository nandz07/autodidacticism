import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={()=>props.greet('child')}>Greet Parent</button>
  )
}

export default ChildComponent