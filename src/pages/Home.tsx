import React, { FC, useState } from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store/burgerStore'
import { setCategoryId } from '../redux/filterSlice'
import s from './Home.module.css'
import Burgers from '../Components/BurgerBlock/Burgers'

const Home: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Бургеры')

  const { categoryId } = useSelector((state: RootState) => state.filterSlice)
  const { items } = useSelector((state: RootState) => state.burgerSlice)

  const dispatch = useDispatch()

  const setCategory = (item: string, index: number) => {
    dispatch(setCategoryId(index))
    setActiveCategory(item)
  }

  return (
    <div>
      <Header />
      <Menu
        value={categoryId}
        setCategory={(item: string, index: number) => setCategory(item, index)}
      />
      <h2 className={s.content__title}>{activeCategory}</h2>
      {items.map(
        (item: {
          id: number
          title: string
          desc: string
          price: string
          photo: string
        }) => {
          return <Burgers {...item} key={item.title} />
        }
      )}
    </div>
  )
}

export default Home
