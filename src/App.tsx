import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart/Cart'

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
export default App
