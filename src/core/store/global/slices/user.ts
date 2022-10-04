import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialUserState } from '../states'
import { UserState } from '../states/type'

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        set: (state, action: PayloadAction<UserState>) => {
            return { ...action.payload, isLogin: true }
        },
        init: () => {
            return initialUserState
        },
    },
})

export const userReducer = userSlice.reducer
