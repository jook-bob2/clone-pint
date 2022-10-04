import { noneAuthClient } from '@/core/config/axios'
import { AxiosError, AxiosResponse } from 'axios'
import { ServerResponse } from '../type'
import { SignInRequest, SignInResponse } from './type'

const BASE_URL = '/user'
const SIGN_IN = `${BASE_URL}/sign/in`

export async function postSignIn(request: SignInRequest): Promise<AxiosResponse<ServerResponse<SignInResponse>, any>> {
    try {
        return await noneAuthClient.post(SIGN_IN, request)
    } catch (e) {
        const err = e as AxiosError
        throw new Error('post sign in error => ', err)
    }
}
