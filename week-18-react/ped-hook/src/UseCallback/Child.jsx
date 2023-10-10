import React, { useEffect } from 'react'

function Child({returnComment}) {
    useEffect(()=>{
        console.log('function was called');
    },[returnComment])
  return (
    <div>{returnComment(" Nandakumar")}</div>
  )
}

export default Child