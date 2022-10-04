import React from 'react'
import styles from '@styles/Layout.module.scss'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <span>헤더입니다.</span>
            </header>
            <main className={styles.content}>{children}</main>
            <footer className={styles.footer}>
                <span>푸터입니다.</span>
            </footer>
        </div>
    )
}
