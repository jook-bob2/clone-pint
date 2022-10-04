import { initialUserState } from '../states'
import { UserState } from '../states/type'
import { userReducer, userSlice } from './user'

describe('user reducer', () => {
    const initialState: UserState = {
        ...initialUserState,
    }

    const { set, init } = userSlice.actions

    it('should handle initial state', () => {
        expect(userReducer(undefined, { type: 'unknown' })).toEqual({
            id: 0,
            email: '',
            accessToken: '',
            refreshToken: '',
            name: '',
            isLogin: false,
        })
    })

    it('should handle set', () => {
        const id = 1
        const name = 'jskim'
        const email = 'test@gmail.com'
        const accessToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoianNraW0ifQ.5Tw_SB2-a5N91Tj7oiF26m65bBUUJaF4r6cN-rQ6m0A'
        const refreshToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Impza2ltIn0.Bxz7ezlVyqZKCK89guB7iYROYv1EbWO1jgL5ulMKQOs'
        const actual = userReducer(
            initialState,
            set({
                id,
                name,
                email,
                accessToken,
                refreshToken,
                isLogin: true,
            }),
        )

        expect(actual.id).toEqual(1)
        expect(actual.name).toEqual(name)
        expect(actual.email).toEqual(email)
        expect(actual.accessToken).toEqual(accessToken)
        expect(actual.refreshToken).toEqual(refreshToken)
    })

    it('should handle init', () => {
        const actual = userReducer(initialState, init())
        expect(actual).toEqual(initialUserState)
    })
})
