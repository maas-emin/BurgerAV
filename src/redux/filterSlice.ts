import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  categoryId: number
}

const initialState: CounterState = {
  categoryId: 0,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
  },
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer
