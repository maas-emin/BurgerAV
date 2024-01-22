import React, { FC } from 'react'
import s from './Menu.module.css'

enum MenuCategory {
  Бургеры = 'Бургеры',
  Суши = 'Суши',
  Пицца = 'Пицца',
  Напитки = 'Напитки',
}

type PropsMenu = {
  value: number
  setCategory: (item: string, index: number) => void
}

const Menu: FC<PropsMenu> = ({ value, setCategory }) => {
  return (
    <ul className={s.munu}>
      {Object.values(MenuCategory).map((item, index) => {
        return (
          <li
            onClick={() => setCategory(item, index)}
            className={value === index ? s.categoryActive : s.categoryNoActive}
            key={item}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
