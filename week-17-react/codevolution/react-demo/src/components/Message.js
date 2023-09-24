import { useState } from "react"


function Message(props){
    const [message,setMessage]=useState('Welcome visitor')
    return(
        <>

         <h1>{message}</h1>
         <button onClick={()=>setMessage('Thank you for subscription !')}>Subscribe</button>
         </>
    )
}
export default Message