import { useState } from "react";
import { useEffect } from "react";
import TodoCard from "./components/TodoCard";
import './App.css'
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";



function App() {
  const { ref, inView, entry } = useInView({
   
  });

  const [todos,setTodos]=useState([])

  const fetchToDos=async ({pageParam})=>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`)
    return res.json()
    
  }

  const {data,status,error,fetchNextPage,isFetchingNextPage,hasNextPage}=useInfiniteQuery({
    queryKey:['todos'],
    queryFn:fetchToDos,
    initialPageParam:1,
    getNextPageParam:(lastPage,allPage)=>{
      const nextPage=lastPage.length ?allPage.length+1:undefined;
      return nextPage
    },
  })

  console.log(data);

  const content =data?.pages.map((todos)=>todos.map(todo=>{
    return <TodoCard key={todo.id} todo={todo}/>
  }))

  useEffect(()=>{
    if(inView && hasNextPage)
    console.log('fire');
    fetchNextPage()
  },[inView,hasNextPage,fetchNextPage])

  if(status==='pending'){
    return <p>Loading...</p>
  }

  if(status === 'error'){
    return <p>Error : {error.message} </p>
  }
  return (
    <div className="App">
      {content}
      <button 
      ref={ref}
      disabled={!hasNextPage || isFetchingNextPage} 
      onClick={()=>fetchNextPage()}>{isFetchingNextPage
      ?'Loading more...':hasNextPage
      ?'Load more':'nothing more to load'} </button>
    </div>
  );
}

export default App;
