import { configureStore } from '@reduxjs/toolkit'
import burger from '../burgerSlice'

export const store = configureStore({
  reducer: {
    burger,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
