import React,{useRef} from 'react'

function RefTutorial() {
let inputField=useRef(null)
const onclickHandle=()=>{
  alert(`Hello ${inputField.current.value}`)
  inputField.current.value=''
  inputField.current.focus()
}
  return (
    <div>
      <h4>enter name</h4>
        <input type="text" name="" id="" ref={inputField} />
        <button onClick={onclickHandle}>submit</button>
    </div>
  )
}

export default RefTutorial