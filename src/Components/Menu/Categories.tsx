import React, { FC } from 'react'
import {
  SortType,
  SortPropertyEnum,
  setSortType,
} from '../../redux/filterSlice'
import s from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/burgerStore'

type SortList = {
  name: string
  sortCategories: SortPropertyEnum
}

export const list: SortList[] = [
  { name: 'популярности (DESC)', sortCategories: SortPropertyEnum.PRICE_ASC },
  { name: 'популярности (ASC)', sortCategories: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (DESC)', sortCategories: SortPropertyEnum.TITLE_ASC },
  { name: 'цене (ASC)', sortCategories: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (DESC)', sortCategories: SortPropertyEnum.RETING_ASC },
  { name: 'алфавиту (ASC)', sortCategories: SortPropertyEnum.RETING_DESC },
]

const Categories: FC = () => {
  const { sort } = useSelector((state: RootState) => state.filterSlice)
  const dispatch = useDispatch()

  const onClickListItem = (item: SortList) => {
    dispatch(setSortType(item))
  }

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li
            className={s.CategoriesLi}
            key={index}
            onClick={() => onClickListItem(item)}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
