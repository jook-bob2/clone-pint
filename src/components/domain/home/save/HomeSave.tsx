import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    saveRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeSave({ saveRef }: Props) {
    return (
        <article ref={saveRef}>
            <div className={styles.contents}>
                <strong>Save</strong>
            </div>
        </article>
    )
}
