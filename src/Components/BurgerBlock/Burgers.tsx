import React, { FC } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import s from './Burgers.module.css'
import { CartSliceType, minusItem } from '../../redux/cartSlice'
import { addItem } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store/burgerStore'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

type BurgerType = {
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

const Burgers: FC<BurgerType> = ({ id, desc, title, name, price, photo }) => {
  const { items } = useSelector((state: RootState) => state.cartSlice)
  const dispatch = useDispatch()

  const getitemsCount = items.find((item) => item.id === id)

  const onClickAdd = (): void => {
    const item: CartSliceType = {
      id,
      name,
      title,
      desc,
      price,
      photo,
      count: 0,
    }
    dispatch(addItem(item))
  }

  const onClickRemove = () => {
    dispatch(minusItem(id))
  }

  return (
    <div className={s.burger_block_wrapper}>
      <div className={s.burger_block}>
        <Link to={`/burger/${id}`}>
          <img className={s.burger_block__image} src={photo} alt="Burgers" />
        </Link>
        <div className={s.block_info}>
          <h4
            className={s.burger_block__title}
            style={!getitemsCount?.count ? {} : { color: '#B80000' }}
          >
            {title}
          </h4>
          <div className={s.burger_block__bottom}>
            <div
              className={s.burger_block__price}
              style={!getitemsCount?.count ? {} : { color: '#B80000' }}
            >
              {price} ₽
            </div>
            <div className={s.button_button__outline}>
              <div className={s.FaMinusReact} onClick={onClickRemove}>
                <FaMinus />
              </div>
              <h3
                className={s.countButton}
                style={!getitemsCount?.count ? {} : { color: '#B80000' }}
              >
                {!getitemsCount?.count ? 0 : getitemsCount.count}
              </h3>
              <div className={s.FaPlusReact} onClick={onClickAdd}>
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burgers
