import { createSlice } from '@reduxjs/toolkit'

export enum SortPropertyEnum {
  TITLE_DESC = 'price',
  TITLE_ASC = '-price',
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
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
}

const initialState: CounterState = {
  categoryId: 0,
  search: '',
  sort: {
    name: 'цене',
    sortCategories: SortPropertyEnum.TITLE_ASC,
  },
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
  },
})

export const { setCategoryId, setSortType, setSearch } = filterSlice.actions

export default filterSlice.reducer
