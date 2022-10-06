import React, { useState } from 'react'
import styles from '@styles/home/Home.module.scss'
import Slider from '@/components/ui/slider/Slider'
import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'
import image5 from '@/assets/images/5.jpg'
import image6 from '@/assets/images/6.jpg'
import { HomeTopItemType } from './HomeTop.types'

interface Props {
    topRef: React.LegacyRef<HTMLElement> | undefined
}

export default function HomeTop({ topRef }: Props) {
    const [items] = useState<HomeTopItemType[]>([
        {
            index: 1,
            image: image1,
            title: '테스트 내용1',
        },
        {
            index: 2,
            image: image2,
            title: '테스트 내용2',
        },
        {
            index: 3,
            image: image3,
            title: '테스트 내용3',
        },
        {
            index: 4,
            image: image4,
            title: '테스트 내용4',
        },
        {
            index: 5,
            image: image5,
            title: '테스트 내용5',
        },
        {
            index: 6,
            image: image6,
            title: '테스트 내용6',
        },
        {
            index: 7,
            image: image6,
            title: '테스트 내용7',
        },
    ])
    return (
        <article ref={topRef}>
            <div className={styles.contents}>
                <div className={styles.top}>
                    <span className={styles.next}>다음</span>
                </div>
                <Slider items={items} />
            </div>
        </article>
    )
}
