import React, { FC, useState } from 'react'
import {
  SortPropertyEnum,
  setSearch,
  setSortType,
} from '../../redux/filterSlice'
import s from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/burgerStore'
import { IoIosSearch } from 'react-icons/io'
import { setSortSushi, setSortDrinks } from '../../redux/filterSlice'

type SortList = {
  name: string
  sortCategories: SortPropertyEnum
}

export const listPrice: SortList[] = [
  { name: 'цене -', sortCategories: SortPropertyEnum.TITLE_ASC },
  { name: 'цене +', sortCategories: SortPropertyEnum.TITLE_DESC },
]

export const listReting: SortList[] = [
  { name: 'Рейтинг-', sortCategories: SortPropertyEnum.RATING_ASC },
  { name: 'Рейтинг+', sortCategories: SortPropertyEnum.RATING_DESC },
]

type PropsCategory = {
  value: string
  categoriSushi: string[]
  categoriesDrinks: string[]
}

const Categories: FC<PropsCategory> = ({
  value,
  categoriSushi,
  categoriesDrinks,
}) => {
  const [inputValue, setInputValue] = useState<string>()
  const { sort, sortSushi, sortDrinks } = useSelector(
    (state: RootState) => state.filterSlice
  )

  const dispatch = useDispatch()

  const onClickListItem = (item: SortList) => {
    dispatch(setSortType(item))
  }

  const onClickSushiSort = (item: string) => {
    dispatch(setSortSushi(item))
  }

  const onClickDrinksSort = (item: string) => {
    dispatch(setSortDrinks(item))
  }

  const onHeandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    )
  }

  const onKeyDondSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearch(inputValue))
      setInputValue('')
    }
  }

  return (
    <div>
      <div className={s.category_rod}>
        <div className={s.categories_twoBlock}>
          <div className={s.div_listPrice_rod}>
            <div className={s.div_listPrice}>
              <div className={s.div_span_rod_price}>
                <div className={s.div_span}>
                  <span>По Цене</span>
                </div>
              </div>
              <div className={s.ul_listPrice}>
                {listPrice.map((item, index) => {
                  return (
                    <li
                      className={
                        item.name === sort.name
                          ? s.liPriceActive
                          : s.liNoPriceActiv
                      }
                      key={index}
                      onClick={() => onClickListItem(item)}
                    >
                      {item.name}
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={s.div_listReting_rod}>
            <div className={s.div_listReting}>
              <div className={s.div_span_rod_rating}>
                <div className={s.div_span}>
                  <span className={s.span_rating}>По Райтингу</span>
                </div>
              </div>
              <div className={s.ul_listReting}>
                {listReting.map((item, index) => {
                  return (
                    <li
                      className={
                        item.name === sort.name
                          ? s.liPriceActive
                          : s.liNoPriceActiv
                      }
                      key={index}
                      onClick={() => onClickListItem(item)}
                    >
                      {item.name}
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
          {value === 'Суши' && (
            <div className={s.div_listReting_rod}>
              <div className={s.div_listReting}>
                <div className={s.div_span_rod_rating}>
                  <div className={s.div_span}>
                    <span className={s.span_rating}>Суши</span>
                  </div>
                </div>
                <div className={s.ul_listReting}>
                  {categoriSushi.map((item, index) => {
                    return (
                      <li
                        className={
                          item === sortSushi
                            ? s.liPriceActive
                            : s.liNoPriceActiv
                        }
                        key={index}
                        onClick={() => onClickSushiSort(item)}
                      >
                        {item}
                      </li>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
          {value === 'Напитки' && (
            <div className={s.div_listReting_rod}>
              <div className={s.div_listReting}>
                <div className={s.div_span_rod_rating}>
                  <div className={s.div_span}>
                    <span className={s.span_rating}>Суши</span>
                  </div>
                </div>
                <div className={s.ul_listReting}>
                  {categoriesDrinks.map((item, index) => {
                    return (
                      <li
                        className={
                          item === sortDrinks
                            ? s.liPriceActive
                            : s.liNoPriceActiv
                        }
                        key={index}
                        onClick={() => onClickDrinksSort(item)}
                      >
                        {item}
                      </li>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={s.categories_input}>
          <div>
            <span className={s.input_span}>Поиск по сайту</span>
            <IoIosSearch className={s.search_icon} />
            <input
              className={s.input}
              type="text"
              value={inputValue}
              onChange={(e) => onHeandleChange(e)}
              onKeyDown={(e) => onKeyDondSearch(e)}
              placeholder="...Enter"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
