import {useState} from 'react'

function Form() {
    const [username,setUserName]=useState('')
    const [description,setDescription]=useState('')
    const [selectdOption,setselectdOption]=useState('')
    const options=['red','blue','green']

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`form data is ${username} and description is ${description} and selectd color = ${selectdOption}`)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">uername</label>
            <input type="text" name="" id="" value={username} onChange={(event)=>setUserName(event.target.value)}/>
            <textarea name="" id="" cols="30" rows="10" value={description} onChange={(event)=>setDescription(event.target.value)}
            ></textarea>
            <select name="" id="" value={selectdOption} onChange={(event)=>setselectdOption(event.target.value)}>
            <option value="">Select an option</option>
                {
                    options.map((option,index)=>{
                        return <option key={index} value={option}>{option}</option>
                    })
                }
                
            </select>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form