import React,{useReducer} from 'react'

const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return{...state,count:count+1}
    case "toggleShowText":
      return{...state,showText:!showText}
  }
}
function ReduceTutorial() {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
        }}>Click me</button>
        {state.showText && <p>This is text</p>}
    </div>
  )
}

export default ReduceTutorial