import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import s from './FilterAv.module.css'

type FilterType = {
  map(
    arg0: (item: FilterType) => import('react/jsx-runtime').JSX.Element
  ): React.ReactNode
  id: number
  category: number
  name: string
  title: string
  desc: string
  photo: string
  price: number
}
const FiltersAV: FC = () => {
  const [filterAv, setFilterAv] = useState<FilterType>()
  const params = useParams()
  console.log(filterAv)

  useEffect(() => {
    async function er() {
      const { data } = await axios.get(
        `https://65a92a6b219bfa371868a40d.mockapi.io/items?id=22`
      )
      setFilterAv(data)
    }
    er()
  }, [])

  return (
    <>
      <Header />
      <div className={s.FilterAv}>
        {!filterAv ? (
          <h1 className={s.filterAvH1}>Загрузка...</h1>
        ) : (
          <>
            {filterAv.map((item: FilterType) => (
              <>
                <img className={s.filterAvImg} src={item.photo} alt="" />
                <div>{item.desc}</div>
                <div>{item.price}Р</div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default FiltersAV
