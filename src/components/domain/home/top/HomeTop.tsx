import React, { useEffect, useState } from 'react'
import styles from '@styles/home/Home.module.scss'
// import Slider from '@/components/ui/slider/Slider'
import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'
import image5 from '@/assets/images/5.jpg'
import image6 from '@/assets/images/6.jpg'
import { ReactComponent as ArrowDown } from '@/assets/images/arrow_down.svg'
import { ReactComponent as ArrowDownSmall } from '@/assets/images/arrow_down_small.svg'
import { HomeTopItemType } from './HomeTop.types'
import styled from 'styled-components'

interface Props {
    topRef: React.RefObject<HTMLElement> | undefined
}

let interval: NodeJS.Timer

const COLORS = ['rgb(97, 140, 123)', 'rgb(194, 139, 0)', 'rgb(0, 118, 211)', 'rgb(64, 122, 87)']
const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image6,
    image6,
    image1,
    image2,
    image3,
    image4,
    image4,
    image3,
]
const imageList2 = imageList.sort(() => Math.random() - 0.5)
const itemList = [
    {
        index: 1,
        images: imageList,
        title: '저녁 식사 메뉴 아이디어를 찾아보세요',
        active: true,
    },
    {
        index: 2,
        images: imageList2,
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

const ImageArea = styled.div`
    transform: ${({ index }: { index: number }) => {
        let vh = 0
        let idx = index
        const max = 60
        const min = 30
        const margin = 36
        const itemWidth = 236 + margin
        const maxIdx = Math.floor(window.innerWidth / itemWidth) - 1
        const firstIdx = 0
        const secondIdx = firstIdx + 1
        const thirdIdx = secondIdx + 1
        const lastSecondIdx = maxIdx - 1
        const lastThirdIdx = lastSecondIdx - 1
        const middleIdx = Math.floor(maxIdx / 2)

        for (let i = 0; i < maxIdx + 1; i++) {
            if (index % (maxIdx + i + 1) === 0) {
                idx = i
            }
        }

        if (idx === firstIdx || idx === maxIdx) {
            vh = max
        } else if (secondIdx === idx || lastSecondIdx === idx) {
            vh = max - 10
        } else if (thirdIdx === idx || lastThirdIdx === idx) {
            vh = max - 20
        } else if (middleIdx === idx) {
            vh = min
        }

        return `translateY(calc(100% - ${vh}vh))`
    }};
`

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

    function handleClickMoveSearch() {
        window.scrollTo({
            top: Number(topRef?.current?.offsetHeight),
            behavior: 'smooth',
        })
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
                        {items[tabIdx].images.map((image, idx) => (
                            <ImageArea key={idx} className={styles.image_wrap} index={idx}>
                                <img role="img" src={image} alt="" />
                            </ImageArea>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.next_arrow}>
                <div className={styles.full_size}>
                    <div className={styles.icon_wrap}>
                        <button className={styles.btn} onClick={() => handleClickMoveSearch()}>
                            <div className={styles.arrow} style={{ background: color }}>
                                <ArrowDown width={20} height={20} />
                            </div>
                        </button>
                    </div>
                    <div className={styles.text_wrap}>
                        <button className={styles.btn} onClick={() => handleClickMoveSearch()}>
                            <span>방식은 다음과 같습니다</span>
                            <ArrowDownSmall width={12} height={12} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}
