import { createSlice } from '@reduxjs/toolkit'
import { fetchBurger } from './burgerSlice'

export enum SortPropertyEnum {
  TITLE_DESC = 'price',
  TITLE_ASC = '-price',
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
}

type ItemsType = {
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

export type SortType = {
  name: string
  sortCategories: SortPropertyEnum
}

export interface CounterState {
  categoryId: number
  search: string
  sort: {
    name: string
    sortCategories: SortPropertyEnum
  }
  sortSushi: string
  sortDrinks: string
}

const initialState: CounterState = {
  categoryId: 0,
  search: '',
  sort: {
    name: 'цене -',
    sortCategories: SortPropertyEnum.TITLE_ASC,
  },
  sortSushi: 'Все',
  sortDrinks: 'Все',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
      state.search = ''
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setSortSushi: (state, action) => {
      state.sortSushi = action.payload
    },
    setSortDrinks: (state, action) => {
      state.sortDrinks = action.payload
    },
  },
})

export const {
  setCategoryId,
  setSortType,
  setSearch,
  setSortSushi,
  setSortDrinks,
} = filterSlice.actions

export default filterSlice.reducer
