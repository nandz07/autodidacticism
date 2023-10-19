import React from 'react'
import Child from './Child'
// import './Home.css'
import homeCss from './Home.module.css'
import btnCss from './Button.module.css'

const Home = () => {
  return (
    <div className={homeCss.header}>
        <h1>Home component</h1>
        <Child />
        <button className={btnCss.loginBtn}>Log In</button>
        <button className={btnCss.logoutBtn}>Log Out</button>
    </div>
  )
}

export default Home