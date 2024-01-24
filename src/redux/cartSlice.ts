import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export type CartSliceType = {
  id: number
  title: string
  name: string
  desc: string
  price: number
  photo: string
  count: number
}

export interface CartSliceInterface {
  items: CartSliceType[]
  totalPrice: number
  totalCount: number
}

const initialState: CartSliceInterface = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
}

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.totalPrice = state.items.reduce((acc, c) => {
        return acc * c.count + c.price
      }, 0)

      state.totalCount = state.items.reduce((acc, c) => {
        return acc + c.count
      }, 0)
    },
  },
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
