import React from 'react'
import styles from '@styles/home/Home.module.scss'

interface Props {
    shopRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeShop({ shopRef }: Props) {
    return (
        <article ref={shopRef}>
            <div className={styles.shop}>
                <div className={styles.left}>
                    <div className={styles.background}></div>
                    <div className={styles.pin_area}>
                        <div className={styles.pin_image}></div>
                        <div className={styles.text_area}>
                            <div className={styles.adjust}>
                                <p className={styles.semibold}>Scout the City</p>
                                <p className={styles.normal}>팔로워 56,700명</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.avatar_area}>
                        <div className={styles.avatar_image}></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.center}>
                        <h1>구매하고, 만들고, 시도하고, 실행하세요.</h1>
                        <p>무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을 발견할 수 있습니다.</p>
                        <div className={styles.btn_wrap}>
                            <button>
                                <span>탐색</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
