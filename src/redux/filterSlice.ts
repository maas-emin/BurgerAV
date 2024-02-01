import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    },
    setSortType: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const { setCategoryId, setSortType } = filterSlice.actions

export default filterSlice.reducer
