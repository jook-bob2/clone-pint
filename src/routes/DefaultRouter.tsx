import React from 'react'
import AppContainer from '@/containers/AppContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'

export default function DefaultRouter() {
    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.key} path={route.path} element={<route.element />} />
                    ))}
                </Routes>
            </AppContainer>
        </BrowserRouter>
    )
}
