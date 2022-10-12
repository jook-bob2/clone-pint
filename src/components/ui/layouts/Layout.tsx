import React from 'react'
import styles from '@styles/Layout.module.scss'
import Header from './Header'
import Footer from './Footer'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
        </div>
    )
}
