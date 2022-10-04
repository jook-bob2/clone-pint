import React from 'react'
import '@styles/global.scss'
import '@styles/reset.scss'
import { Provider } from 'react-redux'
import DefaultRouter from './routes/DefaultRouter'
import { store } from '@store/store'

export default function App() {
    return (
        <Provider store={store}>
            <DefaultRouter />
        </Provider>
    )
}
