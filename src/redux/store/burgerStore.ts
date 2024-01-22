import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from '../burgerSlice'
import filterSlice from '../filterSlice'

export const store = configureStore({
  reducer: {
    burgerSlice,
    filterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
