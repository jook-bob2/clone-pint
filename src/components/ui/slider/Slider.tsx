import React, { useState } from 'react'
import styles from '@styles/Slider.module.scss'
import { HomeTopItemType } from '@/components/domain/home/top/HomeTop.types'
// import styled from 'styled-components'

interface Props {
    items: Array<HomeTopItemType>
}

// const IMAGE_WIDTH = 236
// const IMAGE_HEIGHT = 350

// const Contents = styled.div`
//     /* transform: ${({ index }: { index: number }) => {
//         const maxSize = Math.floor(window.innerWidth / IMAGE_WIDTH)

//         return `translateY(calc(100%))`
//     }}; */
// `

export default function Slider({ items }: Props) {
    const [tabIdx] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    <h1>{items[tabIdx].title}</h1>
                </div>
                {/* {items.map((item) => (
                    <Contents key={item.index} className={styles.contents} index={item.index}>
                        <div>
                            <img src={item.image} alt="" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
                        </div>
                    </Contents>
                ))} */}
            </div>
            <div className={styles.page}>
                <ul>
                    <li>
                        <span className={styles.active} />
                    </li>
                    <li>
                        <span />
                    </li>
                    <li>
                        <span />
                    </li>
                    <li>
                        <span />
                    </li>
                </ul>
            </div>
        </div>
    )
}
