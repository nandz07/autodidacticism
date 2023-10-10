import React, { useState ,forwardRef,useImperativeHandle} from 'react'

const Button=forwardRef((props,ref)=> {
    const [toggle,setToggle]= useState(false)

    useImperativeHandle(ref,()=>({
      alterToggle() {
        setToggle(!toggle);
      },
    }))
  return (
    <>
    <button >Chiled Button</button>
    {toggle &&<h1>Togle Text</h1>}
    </>
    
  )
})

export default Button