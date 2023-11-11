import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,setShowLabel} from "../redux/store";

function IncrementDecrement() {
  const dispatch=useDispatch()
  const handleShowLabel=(evt)=>{
    const checkboxValue=evt.target.checked
// ----------- without action creator ----------
    // dispatch({
    //   type:'show-label',
    //   payload:checkboxValue
    // })

    // ---------- with action creator ------------
    dispatch(setShowLabel(checkboxValue))
  }
    const value=useSelector((state)=>{
        return state.value
      })
    const lab=useSelector((state)=>{
      return state.showLabel
    })
  return (
    <>
    <input type="checkbox" checked={lab} name="" id="" onChange={handleShowLabel} />
    <button onClick={()=>{
      // dispatch({type:'increment'})
      dispatch(increment())
      }}>Increment</button>
    <span>{value}</span>
    <button onClick={()=>{
      // dispatch({type:'decrement'})
      dispatch(decrement())
      }}>Decrement</button>
    {lab ? <div>hai</div> : null}

    </>
  )
}

export default IncrementDecrement