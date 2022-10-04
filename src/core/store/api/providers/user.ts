import { ServerResponse } from '@/core/api/type'
import { SignInRequest, SignInResponse } from '@/core/api/user/type'
import { AxiosError } from 'axios'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { POST_USER_SIGN_IN } from '../create/user'

export default function useUserApi() {
    const userLogin = (state: RootState) => state.userLoginApi
    const dispatch = useAppDispatch()

    return {
        userLogin: {
            selector: useAppSelector(userLogin),
            postUserSignIn: async (data: SignInRequest): Promise<ServerResponse<SignInResponse>> => {
                try {
                    return await POST_USER_SIGN_IN(dispatch, data)
                } catch (e) {
                    const err = e as AxiosError
                    throw new Error('post sign in error => ', err)
                }
            },
        },
    }
}
