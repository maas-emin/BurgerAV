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
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowCircleDown } from 'react-icons/fa'

type BurgersType = {
  id: number
  category: number
  rating: number
  name: string
  sort: string
  title: string
  desc: string
  price: number
  photo: string
}

const defaultValuesSortSushi = ['Все', 'Горячие роллы', 'Холодные роллы']
const defaultValuesSortDrinks = ['Все', 'Гозированые', 'Не Гозированые']

const Home: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Бургеры')

  const [togleCategories, setTogleCategories] = useState<boolean>(true)

  const { categoryId, sort, search, sortSushi, sortDrinks } = useSelector(
    (state: RootState) => state.filterSlice
  )

  const { items, status } = useSelector((state: RootState) => state.burgerSlice)

  const dispatch = useDispatch<AppDispatch>()

  console.log(sortDrinks)
  console.log(sortSushi)

  const addPizzas = () => {
    const category = activeCategory
    const order = sort.sortCategories.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortCategories.replace('-', '')
    const searchSortSushi =
      sortSushi !== 'Все' && activeCategory === 'Суши'
        ? `&search=${sortSushi}`
        : ''
    const searchSortDrinks =
      sortDrinks !== 'Все' && activeCategory === 'Напитки'
        ? `&search=${sortDrinks}`
        : ''
    const er = activeCategory === 'Суши' ? searchSortSushi : searchSortDrinks

    const searchValue = search ? `&search=${search}` : er

    dispatch(fetchBurger({ category, order, sortBy, searchValue }))
  }

  useEffect(() => {
    addPizzas()
  }, [activeCategory, sort.sortCategories, search, sortSushi, sortDrinks])

  const setCategory = (item: string, index: number) => {
    dispatch(setCategoryId(index))
    setActiveCategory(item)
  }

  useEffect(() => {
    switch (search) {
      case 'Бургеры':
        dispatch(setCategoryId(0))
        setActiveCategory('Бургеры')
        break
      case 'Суши':
        dispatch(setCategoryId(1))
        setActiveCategory('Суши')
        break
      case 'Пицца':
        dispatch(setCategoryId(2))
        setActiveCategory('Пицца')
        break
      case 'Напитки':
        dispatch(setCategoryId(3))
        setActiveCategory('Напитки')
        break
      default:
    }
  }, [search])

  const togleFCategories = () => {
    setTogleCategories(!togleCategories)
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
      <button className={s.button_categories} onClick={togleFCategories}>
        <span className={s.span_categories}>
          Сортировка
          {togleCategories === true ? (
            <FaArrowAltCircleUp className={s.sort_icons} />
          ) : (
            <FaArrowCircleDown className={s.sort_icons} />
          )}
        </span>
      </button>
      {togleCategories && (
        <Categories
          value={activeCategory}
          categoriSushi={defaultValuesSortSushi}
          categoriesDrinks={defaultValuesSortDrinks}
        />
      )}
      <h3 className={s.content__title}>{activeCategory}</h3>
      {status === 'error' && <NotFound />}
      <div className={s.content__items}>
        {status === 'loading' ? scletons : burgers}
      </div>
    </div>
  )
}

export default Home
