import React, { FC } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart/Cart'
import FiltersAV from './Components/BurgerBlock/FiltersAV'

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/burger/:id" element={<FiltersAV />} />
      </Routes>
    </div>
  )
}
export default App
