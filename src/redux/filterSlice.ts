import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SortPropertyEnum {
  RETING_DESC = 'rating',
  RETING_ASC = '-rating',
  TITLE_DESC = 'price',
  TITLE_ASC = '-price',
  PRICE_DESC = 'title',
  PRICE_ASC = '-title',
}

export type SortType = {
  name: string
  sortCategories: SortPropertyEnum
}

export interface CounterState {
  categoryId: number
  search: string
  pageCount: number
  sort: {
    name: string
    sortCategories: SortPropertyEnum
  }
}

const initialState: CounterState = {
  categoryId: 0,
  search: '',
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortCategories: SortPropertyEnum.PRICE_DESC,
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const { setCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer
