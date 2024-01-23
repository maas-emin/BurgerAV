import React, { FC } from 'react'
import s from './Burgers.module.css'
import { CartSliceType } from '../../redux/cartSlice'
import { addItem } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/burgerStore'

type BurgerType = {
  id: number
  title: string
  desc: string
  price: number
  photo: string
}

const Burgers: FC<BurgerType> = ({ id, title, desc, price, photo }) => {
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  )
  const dispatch = useDispatch()

  const arr = items.map((item) => {
    return item.count > 1 ? item.price * item.count : item.price
  })

  if (arr) {
    let result = arr.reduce((acc, a) => {
      return acc + a
    }, 0)
    console.log(result)
  }

  const getitemsCount = items.find((item) => item.id === id)

  const onClickAdd = () => {
    const item: CartSliceType = {
      id,
      title,
      desc,
      price,
      photo,
      count: 0,
    }
    dispatch(addItem(item))
  }
  return (
    <div className={s.burger_block_wrapper}>
      <div className={s.burger_block}>
        <img className={s.burger_block__image} src={photo} alt="Pizza" />
        <h4 className={s.burger_block__title}>{title}</h4>
        {/* <div className={s.burger_lock__selector}>
            <ul>
              {types.map((type, index) => {
                return (
                  <li
                    onClick={() => setActiveType(index)}
                    key={type}
                    className={type === activeType ? 'active' : ''}
                  >
                    {typeNames[type]}
                  </li>
                )
              })}
            </ul>
            <ul>
              {sizes.map((size, index) => {
              return (
                <li
                  onClick={() => setActiveSize(index)}
                  key={index}
                  className={index === activeSize ? 'active' : ''}
                >
                  {size}см.
                </li>
              )
            })}
            </ul>
          </div> */}
        <div className={s.burger_block__bottom}>
          <div className={s.burger_block__price}>{price} ₽</div>
          <button className={s.button_button__outline} onClick={onClickAdd}>
            <svg
              className={s.svg}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
            </svg>
            <span>Добавить</span>
            <span className={s.countButton}>
              {!getitemsCount?.count ? 0 : getitemsCount.count}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Burgers
