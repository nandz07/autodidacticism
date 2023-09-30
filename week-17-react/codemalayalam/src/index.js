import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListItem from './list/listItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
const b=React.createElement(
  "div",
  {
    id:"my_hello_2"
  },
  "Hello"
)
let a= <div id='my_hello'>Hello</div>

const arr=["one","two","three"];
const is_dis=false;
const obj={
  backgroundColor:"green",
  padding:5,
  color:"white",
  borderRadius:2
}
const arr2=["Label 0","Label 1","Label 2","Label 3","Label 4",]

function myClick(){
  console.log("clicked")
}



root.render(
  <div className='app'>
    <div className='app-header'>
      <span className='header-title'>code malayalam</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Setting</span>
      <span>Logout</span>
    </div>
    <div className='app-body'>
      <div className='app-list'>
        
        {/* {ListItem()} or <ListItem/> */}
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        
      </div>
    </div>
  </div>
  
);
// react 3rd 
// root.render(
//   <div onClick={myClick}>
//   Hello
//   </div>
// );
// root.render(
//   <div>
//   {
//     // arr2.map((item)=>{
//     //   return <label >{item}</label>
//     // })
//     [
//       <label key={"one"}>one</label>,
//       <label key={"two"}>two</label>
//     ]
//   }
//   </div>
// );
// root.render(
//   <div id='my_hello' className={is_dis?'is_disabled':'is_enabled'}
//     style={{
//       backgroundColor:"green",
//       padding:5,
//       color:"white",
//       borderRadius:2
//     }}
//   >
//     <h1>Head</h1> 
//     </div>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
