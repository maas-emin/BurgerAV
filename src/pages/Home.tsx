import React, { FC, useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Menu from '../Components/Menu/Menu'

import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store/burgerStore'
import { setCategoryId } from '../redux/filterSlice'
import s from './Home.module.css'
import Burgers from '../Components/BurgerBlock/Burgers'
import SceletonBurger from '../Components/Sceleton/SceletonBurger'
import SceletonSushi from '../Components/Sceleton/SceletonSushi'
import SceletonDrink from '../Components/Sceleton/SceletonDrink'
import { fetchBurger } from '../redux/burgerSlice'
import NotFound from './NotFound/NotFound'
import Categories from '../Components/Menu/Categories'

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

  const { categoryId, sort, search } = useSelector(
    (state: RootState) => state.filterSlice
  )
  const { items, status } = useSelector((state: RootState) => state.burgerSlice)
  const dispatch = useDispatch<AppDispatch>()

  const addPizzas = () => {
    const category = activeCategory
    const order = sort.sortCategories.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortCategories.replace('-', '')
    const searchValue = search ? `&search=${search}` : ''

    dispatch(fetchBurger({ category, order, sortBy, searchValue }))
  }

  useEffect(() => {
    addPizzas()
  }, [activeCategory, sort.sortCategories, search])

  const setCategory = (item: string, index: number) => {
    dispatch(setCategoryId(index))
    setActiveCategory(item)
  }

  const scletons = [...new Array(8)].map((_, index) => {
    if (activeCategory === 'Бургеры') {
      return <SceletonBurger key={index} />
    } else if (activeCategory === 'Суши') {
      return <SceletonSushi key={index} />
    } else if (activeCategory === 'Напитки') {
      return <SceletonDrink key={index} />
    }
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
      <Categories />
      <h2 className={s.content__title}>{activeCategory}</h2>
      {status === 'error' && <NotFound />}
      <div className={s.content__items}>
        {status === 'loading' ? scletons : burgers}
      </div>
    </div>
  )
}

export default Home
