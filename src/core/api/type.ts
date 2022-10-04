export interface ServerResponse<T> {
    data: T
    msg: string
    code: string
    success: boolean
}

export interface ServerError {
    msg: string
    code: string
    success: boolean
}
