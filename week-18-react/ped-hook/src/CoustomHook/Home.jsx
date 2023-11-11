import React from 'react'
import {CoustomHook} from './CoustomHook'

function Home() {
    const [data] = CoustomHook("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  )
}

export default Home