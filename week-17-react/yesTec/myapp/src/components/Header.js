import React from 'react'
// import "./Header.css"
import headerCss from './Header.module.css'

export const Header = () => {
    const headingStyle ={color:"blue"}
  return (
    <div className={headerCss.header}>
        {/* <h1 style={headingStyle}>Component 1</h1> */}
        <h1>Component 1</h1>
        <p className='para'>This is a paragraph</p>
    </div>
  )
}

export default Header
