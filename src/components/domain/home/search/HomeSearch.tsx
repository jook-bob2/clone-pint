import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    searchRef: React.LegacyRef<HTMLElement> | undefined
}

export default function HomeSearch({ searchRef }: Props) {
    return (
        <article ref={searchRef} id="search">
            <div className={styles.contents}>
                <strong>search</strong>
            </div>
        </article>
    )
}
