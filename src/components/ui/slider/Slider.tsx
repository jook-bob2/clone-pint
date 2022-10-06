import React, { useState } from 'react'
import styles from '@styles/Slider.module.scss'
import { HomeTopItemType } from '@/components/domain/home/top/HomeTop.types'
import styled from 'styled-components'

interface Props {
    items: Array<HomeTopItemType>
}

const Contents = styled.div`
    transform: ${({ index }: { index: number }) => {
        const maxSize = 7
        const middle = Math.floor(maxSize / 2) + 1
        let px = 0
        const maxHeight = 300

        if (index === 1) {
            px = -maxHeight
        }

        if (index === 2) {
            px = -maxHeight / 2
        }

        if (index === middle) {
            px = 120
        }

        if (index === 6) {
            px = -maxHeight / 2
        }

        if (index === 7) {
            px = -maxHeight
        }

        return `translateY(${px}px)`
    }};
`

const IMAGE_WIDTH = 236
const IMAGE_HEIGHT = 350

export default function Slider({ items }: Props) {
    const [tabIdx] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    <h1>{items[tabIdx].title}</h1>
                </div>
                {items.map((item) => (
                    <Contents key={item.index} className={styles.contents} index={item.index}>
                        <div>
                            <img src={item.image} alt="" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
                        </div>
                        {/* <div
                        className={styles.bottom_image}
                        style={{
                            transform: `translateY(${calcTranslateY(index)}px)`,
                            maxHeight: 100,
                        }}
                    >
                        <img src={item} alt="" width={236} height={350} />
                    </div> */}
                    </Contents>
                ))}
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
