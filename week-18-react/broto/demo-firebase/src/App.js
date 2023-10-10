
import { useEffect,useState } from 'react';
import React from "react";
import {db} from './firebase/config'
import {collection,getDocs} from 'firebase/firestore'

function App() {
  const [users,setUsers]=useState([])
  const userCollectionRef =collection(db,"Users")

  useEffect(()=>{
    const getUsers=async ()=>{
      const data=await getDocs(userCollectionRef)
      console.log(data);
      // setUsers(data.doc.map((doc)=>({...doc.data()})))
    }
    getUsers()
  },[])
  return (
    <div className="App">
      {users.map((user)=>{
        return(
          <div>
            {""}
            <h1>Name : {user.name}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;


