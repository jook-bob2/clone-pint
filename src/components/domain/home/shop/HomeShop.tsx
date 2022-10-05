import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    shopRef: React.LegacyRef<HTMLElement> | undefined
}

export default function HomeShop({ shopRef }: Props) {
    return (
        <article ref={shopRef}>
            <div className={styles.contents}>
                <strong>Shop</strong>
            </div>
        </article>
    )
}
