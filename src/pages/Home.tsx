import React, { FC, useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store/burgerStore'
import { setCategoryId } from '../redux/filterSlice'
import s from './Home.module.css'
import Burgers from '../Components/BurgerBlock/Burgers'
import SceletonBurger from '../Components/BurgerBlock/SceletonBurger'

type BurgersType = {
  id: number
  title: string
  name: string
  desc: string
  price: number
  photo: string
}

const Home: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Бургеры')

  const { categoryId } = useSelector((state: RootState) => state.filterSlice)
  const { items, status } = useSelector((state: RootState) => state.burgerSlice)

  const dispatch = useDispatch()

  const setCategory = (item: string, index: number) => {
    dispatch(setCategoryId(index))
    setActiveCategory(item)
  }

  const scletons = [...new Array(5)].map((_, index) => {
    return <SceletonBurger key={index} />
  })

  const burgers = items.map((item: BurgersType) => {
    return <Burgers {...item} key={item.title} />
  })

  return (
    <div className={s.content__menu}>
      <Header />
      <Menu
        value={categoryId}
        setCategory={(item: string, index: number) => setCategory(item, index)}
      />
      <h2 className={s.content__title}>{activeCategory}</h2>
      {status === 'error' && (
        <h2 className={s.h2}>ОШИБКА: провертье подключение к интернету</h2>
      )}
      <div className={s.content__items}>
        {status === 'loading' ? scletons : burgers}
      </div>
    </div>
  )
}

export default Home
