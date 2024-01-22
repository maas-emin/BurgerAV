import React, { FC, useEffect } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './redux/store/burgerStore'
import { increment, fetchBurger } from './redux/burgerSlice'
import './App.css'
import Home from './pages/Home'

const App: FC = () => {
  const { items } = useSelector((state: RootState) => state.burger)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBurger())
  }, [])

  console.log(items)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
