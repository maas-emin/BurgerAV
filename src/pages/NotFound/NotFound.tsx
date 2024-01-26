import React, { FC } from 'react'
import s from './NotFound.module.css'

const NotFound: React.FC = () => {
  return (
    <div className={s.root}>
      <h1>
        <span>&#129300;</span>
        <h1>Ничего не найдено</h1>
      </h1>
      <p className={s.description}>
        Данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  )
}

export default NotFound
