import { userSlice } from '@/core/store/global/slices/user'
import { useAppDispatch, useAppSelector } from '@/core/store/hooks'
import { RootState } from '@/core/store/store'

export default function useUserInfo() {
    const userInfo = (state: RootState) => state.userInfo

    return {
        userInfo: useAppSelector(userInfo),
        dispatch: useAppDispatch(),
        actions: userSlice.actions,
    }
}
