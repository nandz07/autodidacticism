
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

// vd--------3
function App(){
  return(
    <div className='App'>
      <Header />
      <Header />
      <Home />
      <Home />
    </div>
  )
}

//  vd----------2
// function App() {

//   const name = 'Smith'
//   const a=5,b=7;
//   const message=()=>{
//     return 'Hello World'
//   }
//   return (
//     // <>
//     //   <h1>hai</h1>
//     //   <h1 className='heading'>Hello world</h1>
//     //   <h1>My name is {name}</h1>
//     //   <h2>{a+b}</h2>
//     //   <h3>{message()}</h3>
//     // </>
//     <div>
//       <table>
//         <Row />
//         <Column />
//       </table>
//     </div>
//   );
// }

// function Row(){
//   return(
//     <div>
//       <tr>
//         <th>Name</th>
//         <th>Address</th>
//       </tr>
//     </div>
//   )
// }
// function Column(){
//   return(
//     <div>
//       <tr>
//         <td>Sachin</td>
//         <td>Mumbai</td>
//       </tr>
//     </div>
//   )
// }
export default App;
