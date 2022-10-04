import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { apiReducers } from './api/reducer'
import { globalReducers } from './global/reducer'

export const store = configureStore({
    reducer: {
        ...apiReducers,
        ...globalReducers,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
