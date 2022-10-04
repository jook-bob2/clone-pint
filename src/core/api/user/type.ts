export interface SignInRequest {
    email: string
    passwd: string
}

export interface SignInResponse {
    id: number
    name: string
    email: string
    accessToken: string
    refreshToken: string
}
