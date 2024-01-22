import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

export interface CounterState {
  value: 0
  incrementAmount: number
  items: []
  status: string
}

const initialState: CounterState = {
  items: [],
  status: 'loading',
  value: 0,
  incrementAmount: 1,
}

export const fetchBurger = createAsyncThunk('burger/fetchBurger', async () => {
  const { data } = await axios.get(
    'https://65a92a6b219bfa371868a40d.mockapi.io/items'
  )
  return data
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload
    },
    decrement: (state) => {
      state.value -= state.incrementAmount
    },
    changeIncrementAmount: (state, action: PayloadAction<any>) => {
      state.incrementAmount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurger.pending, (state) => {
      state.status = 'loading'
      state.items = []
    })
    builder.addCase(fetchBurger.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchBurger.rejected, (state) => {
      state.items = []
      state.status = 'error'
    })
  },
})

export const { increment, decrement, changeIncrementAmount } =
  counterSlice.actions

export default counterSlice.reducer
