import React from 'react'
import styles from '@styles/home/Home.module.scss'
import TopRight from '@/assets/images/topRight-d.png'
import Left from '@/assets/images/left-511a.png'
import Right from '@/assets/images/right-88044.png'
import Center from '@/assets/images/center-7749.png'

interface Props {
    searchRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeSearch({ searchRef }: Props) {
    return (
        <article ref={searchRef} id="search">
            <div className={styles.search}>
                <div className={styles.left}>
                    <h1>left</h1>
                </div>
                <div className={styles.right}>
                    <h1>right</h1>
                </div>
            </div>
        </article>
    )
}
