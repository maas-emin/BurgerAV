import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

type FetchByrgersArgs = {
  category: string
}

type ItemsType = {
  id: number
  title: string
  name: string
  desc: string
  price: number
  photo: string
}

export interface CounterState {
  value: 0
  incrementAmount: number
  items: ItemsType[]
  status: string
}

const initialState: CounterState = {
  items: [],
  status: 'loading',
  value: 0,
  incrementAmount: 1,
}

export const fetchBurger = createAsyncThunk('burger/fetchBurger', async () => {
  // const { category } = params
  // console.log(category)
  const { data } = await axios.get(
    `https://65a92a6b219bfa371868a40d.mockapi.io/items?search=Бургеры
    `
  )
  return data
})

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {},
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

export const {} = burgerSlice.actions

export default burgerSlice.reducer
