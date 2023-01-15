import { configureStore } from '@reduxjs/toolkit'
import deckReducer from './state/deck'

export const store = configureStore({
  reducer: {
    decks: deckReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch