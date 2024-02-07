import React, { FC } from 'react'
import s from './NotFound.module.css'

const NotFound: React.FC = () => {
  return (
    <div className={s.root}>
      <h1>
        <span>&#129300;</span>
        <h1 className={s.h1_cart_not_found}>Ничего не найдено</h1>
      </h1>
      <p className={s.description}>Данная страница отсутсвует в Burger_AV</p>
    </div>
  )
}

export default NotFound
