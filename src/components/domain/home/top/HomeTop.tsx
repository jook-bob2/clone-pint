import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    topRef: React.LegacyRef<HTMLElement> | undefined
}

export default function HomeTop({ topRef }: Props) {
    return (
        <article ref={topRef}>
            <div className={styles.contents}>
                <strong>Top</strong>
            </div>
        </article>
    )
}
