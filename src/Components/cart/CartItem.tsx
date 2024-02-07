import React, { FC } from 'react'
import { CiCircleMinus } from 'react-icons/ci'
import { CiCirclePlus } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/cartSlice'

import s from './CartItem.module.css'

type CartItemType = {
  id: number
  name: string
  title: string
  desc: string
  price: number
  photo: string
  count: number
}

const CartItem: FC<CartItemType> = ({
  id,
  name,
  title,
  desc,
  price,
  photo,
  count,
}) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    const item = {
      id,
      name,
      title,
      desc,
      price,
      photo,
      count,
    }
    dispatch(addItem(item))
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    const remove = window.confirm('Вы точно хотите удалить данную позицию ?')
    if (remove) {
      dispatch(removeItem(id))
    }
  }

  return (
    <div className={s.cart__item}>
      <div className={s.burger_block_img}>
        <div className={s.cart__item_img}>
          <img className={s.pizza_block__image} src={photo} alt="Burger" />
        </div>
        <div className={s.cart__item_info}>
          <span>{title}</span>
        </div>
      </div>
      <div className={s.cart__item_count}>
        <div onClick={onClickMinus} className={s.cart__item_count_minus}>
          <CiCircleMinus className={s.buttonminus} />
        </div>
        <b className={s.cartitenCount}>{count}</b>
        <div onClick={onClickPlus} className={s.cart__item_count_plus}>
          <CiCirclePlus className={s.buttonplus} />
        </div>
      </div>
      <div className={s.cart__item_price}>
        <b className={s.cart__item_price_b_con}>{price * count}₽</b>
      </div>
      <div className={s.cart__item_remove}>
        <div onClick={onClickRemove} className={s.button__circle}>
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  )
}

export default CartItem
