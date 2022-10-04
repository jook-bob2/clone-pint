import Layout from '@/components/ui/layouts/Layout'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function AppContainer({ children }: Props) {
    return <Layout>{children}</Layout>
}
