import { createSlice } from '@reduxjs/toolkit'
import { initialApiState } from './states'

export function createAsyncSlice(name: string) {
    return createSlice({
        name,
        initialState: initialApiState,
        reducers: {
            apiCall: (state) => {
                state.loading = true
            },
            apiCallSuccess: (state, action) => {
                state.data = action.payload
                state.loading = false
            },
            apiCallFailure: (state, action) => {
                state.error = action.payload
                state.loading = false
            },
        },
    })
}
