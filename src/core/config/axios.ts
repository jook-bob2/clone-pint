import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL = '/app/v1'
const AUTH_API_URL = process.env.VITE_AUTH_API_URL as string
const NORMAL_API_URL = process.env.VITE_NORMAL_API_URL as string

/*
 * axios 인터셉터 설정
 */
function setInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            return config
        },
        (error: AxiosError) => {
            return Promise.reject(error)
        },
    )
    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        (error: AxiosError) => {
            return error
        },
    )
    return instance
}

// 권한 axios
function authCreate(url: string, options: { authentication: boolean }) {
    const instance = axios.create(Object.assign({ baseURL: url }, options))
    setInterceptors(instance)
    return instance
}

// 비권한 axios
function noneAuthCreate(url: string, options: { authentication: boolean }) {
    const instance = axios.create(Object.assign({ baseURL: url }, options))
    setInterceptors(instance)
    return instance
}

// 토큰 검증 할 때 사용
export const authClient = authCreate(NORMAL_API_URL, { authentication: true })

// 토큰 검증 안 할 때 사용
export const noneAuthClient = noneAuthCreate(AUTH_API_URL, { authentication: true })
export const normalClient = noneAuthCreate(NORMAL_API_URL, { authentication: false })
