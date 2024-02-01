import React, { FC } from 'react'
import { SortPropertyEnum, setSortType } from '../../redux/filterSlice'
import s from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/burgerStore'

type SortList = {
  name: string
  sortCategories: SortPropertyEnum
}

export const listPrice: SortList[] = [
  { name: 'цене (DESC)', sortCategories: SortPropertyEnum.TITLE_ASC },
  { name: 'цене (ASC)', sortCategories: SortPropertyEnum.TITLE_DESC },
]

export const listReting: SortList[] = [
  { name: 'Рейтинг (DESC)', sortCategories: SortPropertyEnum.RATING_ASC },
  { name: 'Рейтинг (ASC)', sortCategories: SortPropertyEnum.RATING_DESC },
]

const Categories: FC = () => {
  const { sort } = useSelector((state: RootState) => state.filterSlice)
  const dispatch = useDispatch()

  const onClickListItem = (item: SortList) => {
    dispatch(setSortType(item))
  }

  console.log(sort.name)

  return (
    <div className={s.category_rod}>
      <div className={s.div_listPrice}>
        <span>по цене</span>
        <ul className={s.ul_listPrice}>
          {listPrice.map((item, index) => {
            return (
              <li
                className={
                  item.name === sort.name ? s.PriceActive : s.NoPriceActiv
                }
                key={index}
                onClick={() => onClickListItem(item)}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className={s.div_listReting}>
        <span>по Райтингу</span>
        <ul className={s.ul_listReting}>
          {listReting.map((item, index) => {
            return (
              <li key={index} onClick={() => onClickListItem(item)}>
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Categories
