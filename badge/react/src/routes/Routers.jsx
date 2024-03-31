import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Usestate from '../pages/Usestate'
import Home from '../pages/Home'

function Routers() {
  return <Routes>
    <Route path='/usestate' element={<Usestate />} />
    <Route path='/' element={<Home />} />
  </Routes>
}

export default Routers