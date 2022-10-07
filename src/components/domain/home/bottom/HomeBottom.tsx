import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    bottomRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeBottom({ bottomRef }: Props) {
    return (
        <article ref={bottomRef}>
            <div className={styles.contents}>
                <strong>Bottom</strong>
            </div>
        </article>
    )
}
