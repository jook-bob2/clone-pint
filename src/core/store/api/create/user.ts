import { postSignIn } from '@/core/api/user/userApi'
import { createAsyncDispatcher } from '../createAsyncDispatcher'
import { createAsyncSlice } from '../createAsyncSlice'

enum UserCreteEnum {
    userLoginApi = 'userLoginApi',
}

export const USER_SIGN_IN_SLICE = createAsyncSlice(UserCreteEnum.userLoginApi)
export const POST_USER_SIGN_IN = createAsyncDispatcher(USER_SIGN_IN_SLICE, postSignIn)

export const userReducers = {
    [UserCreteEnum.userLoginApi]: USER_SIGN_IN_SLICE.reducer,
}
