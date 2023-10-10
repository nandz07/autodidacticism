import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    console.log(age);  // 0

    setAge(age =>age+ 1); // Request a re-render with 1
  console.log(age);  // Still 0!

  setTimeout(() => {
    // console.log(age); // Also 0!
  }, 5000);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
