import { ServerResponse } from '@/core/api/type'
import { AnyAction, Dispatch, Slice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { InitialApiState } from './states/type'

export function createAsyncDispatcher(
    slice: Slice<
        InitialApiState,
        {
            apiCall: (state: any) => void
            apiCallSuccess: (state: any, action: any) => void
            apiCallFailure: (state: any, action: any) => void
        },
        any
    >,
    promiseFn: (...rest: any) => Promise<AxiosResponse<ServerResponse<any>>>,
) {
    async function actionHandler(dispatch: Dispatch<AnyAction>, ...rest: any) {
        const { apiCall, apiCallFailure, apiCallSuccess } = slice.actions
        dispatch(apiCall())

        try {
            const response = await promiseFn(...rest)

            dispatch(apiCallSuccess({ ...response.data }))

            return Promise.resolve({ ...response.data })
        } catch (e) {
            dispatch(apiCallFailure(e))

            return Promise.reject(e)
        }
    }

    return actionHandler
}
