
import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [state,setState]=useState([])
  return (
    <div className="App">
      <h1>hai</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
          console.log(response.data);
          setState(response.data)
        }).catch((error)=>{

          console.log(error);
        })
      }}>Click me</button>
      {state.map((obj,index)=>{
        return(
          <>
          <h1>{index}</h1>
          <h4>{obj.title}</h4>
          <h4>{obj.body}</h4>
          </>
        )
      })}
    </div>
  );
}

export default App;
