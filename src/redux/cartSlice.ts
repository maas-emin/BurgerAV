import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export type CartSliceType = {
  id: number
  title: string
  desc: string
  price: number
  photo: string
  count: number
}

export interface CartSliceInterface {
  items: CartSliceType[]
  totalPrice: any
}

const initialState: CartSliceInterface = {
  items: [],
  totalPrice: 0,
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

      state.totalPrice = state.items
    },
  },
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
