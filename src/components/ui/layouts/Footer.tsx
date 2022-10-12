import React from 'react'
import styles from '@styles/Layout.module.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <Link to="/">
                    <span>서비스 약관</span>
                </Link>
                <Link to="/">
                    <span>개인정보 보호정책</span>
                </Link>
                <Link to="/">
                    <span>도움말</span>
                </Link>
                <Link to="/">
                    <span>iPhone 앱</span>
                </Link>
                <Link to="/">
                    <span>Android 앱</span>
                </Link>
                <Link to="/">
                    <span>사용자</span>
                </Link>
                <Link to="/">
                    <span>컬렉션</span>
                </Link>
                <Link to="/">
                    <span>오늘</span>
                </Link>
                <Link to="/">
                    <span>탐색</span>
                </Link>
            </div>
        </footer>
    )
}
