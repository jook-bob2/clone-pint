import React, { useEffect, useState } from 'react'
import styles from '@styles/home/Home.module.scss'
// import Slider from '@/components/ui/slider/Slider'
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

let interval: NodeJS.Timer

const COLORS = ['rgb(97, 140, 123)', 'rgb(194, 139, 0)', 'rgb(0, 118, 211)', 'rgb(64, 122, 87)']

const imageList = [image1, image2, image3, image4, image5, image6, image6]
const itemList = [
    {
        index: 1,
        images: imageList.sort(() => Math.random() - 0.5),
        title: '저녁 식사 메뉴 아이디어를 찾아보세요',
        active: true,
    },
    {
        index: 2,
        images: imageList,
        title: '집안 꾸미기 아이디어를 찾아보세요',
        active: false,
    },
    {
        index: 3,
        images: imageList,
        title: '새로운 패션을 찾아보세요',
        active: false,
    },
    {
        index: 4,
        images: imageList,
        title: '정원 가꾸기 아이디어를 찾아보세요',
        active: false,
    },
]
const DELAY = 3000
export default function HomeTop({ topRef }: Props) {
    const [items, setItems] = useState<HomeTopItemType[]>([...itemList])

    const [tabIdx, setTabIdx] = useState(0)
    const [color, setColor] = useState(shuffleColor())

    useEffect(() => {
        clearInterval(interval)
        interval = setInterval(() => {
            setColor(shuffleColor())
            if (tabIdx >= 0 && tabIdx < items.length - 1) {
                setTabIdx(tabIdx + 1)
                activeItem(tabIdx + 1)
            } else if (items.length - 1 <= tabIdx) {
                setTabIdx(0)
                activeItem(0)
            }
        }, DELAY)
    }, [tabIdx, items])

    function shuffleColor(): string {
        return COLORS.sort(() => Math.random() - 0.5)[0]
    }

    function activeItem(index: number) {
        setItems([
            ...items.map((item, itemIdx) => {
                if (index === itemIdx) {
                    return { ...item, active: true }
                }
                return { ...item, active: false }
            }),
        ])
    }

    function handleClickScroller(index: number) {
        setColor(shuffleColor())
        setItems([
            ...items.map((item, itemIdx) => {
                if (index === item.index) {
                    setTabIdx(itemIdx)
                    return { ...item, active: true }
                }
                return { ...item, active: false }
            }),
        ])
    }

    return (
        <article ref={topRef}>
            <div className={styles.top}>
                <div className={styles.main_title}>다음</div>
            </div>
            <div className={styles.home_idea_text}>
                {items.map((item) => (
                    <p
                        key={item.index}
                        className={`${item.active ? styles.active : styles.none_active}`}
                        style={{ color }}
                    >
                        {item.title}
                    </p>
                ))}
            </div>
            <div className={styles.idea_scroller}>
                <ul>
                    {items.map((item) => (
                        <li key={item.index}>
                            <button
                                style={{ background: item.active ? color : '' }}
                                onClick={() => handleClickScroller(item.index)}
                            ></button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.image_area}>
                <div className={styles.wrap}>
                    <div className={styles.contents}>
                        <div className={styles.flex}>
                            <div className={styles.calc_width}>
                                <div role="presentation">
                                    <div className={styles.home_pins_container}>
                                        {items.map((item, itemIdx) => {
                                            return (
                                                <div
                                                    key={itemIdx}
                                                    className={`${styles.all_pins} ${styles.none_active}`}
                                                >
                                                    <div className={styles.home_pin}>
                                                        <div className={styles.box}>
                                                            {/* <img role="img" src={image} alt="" /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {items[tabIdx].images.map((image, idx) => (
                                            <div key={idx} className={`${styles.all_pins} ${styles.active}`}>
                                                <div className={styles.home_pin}>
                                                    <div className={styles.box}>
                                                        <img role="img" src={image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
