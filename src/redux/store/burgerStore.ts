import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from '../burgerSlice'
import filterSlice from '../filterSlice'
import cartSlice from '../cartSlice'

export const store = configureStore({
  reducer: {
    burgerSlice,
    filterSlice,
    cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
