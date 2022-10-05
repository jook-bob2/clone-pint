import React, { useEffect, useRef, useState } from 'react'
import styles from '@styles/home/Home.module.scss'
import HomeTop from './top/HomeTop'
import HomeSearch from './search/HomeSearch'
import HomeSave from './save/HomeSave'
import HomeShop from './shop/HomeShop'
import HomeBottom from './bottom/HomeBottom'
import useScroll from '@/hooks/useScroll'

type PositionType = 'up' | 'down' | undefined

export default function Home() {
    const { scrollY } = useScroll()
    // const [position, setPosition] = useState<PositionType>(undefined)
    console.log('scrollY => ', scrollY)
    const containerRef = useRef<HTMLElement>(null)
    const topRef = useRef<HTMLElement>(null)
    const searchRef = useRef<HTMLElement>(null)
    // const saveRef = useRef<HTMLElement>(null)
    // const shopRef = useRef<HTMLElement>(null)
    // const bottomRef = useRef<HTMLElement>(null)

    // useEffect(() => {
    //     if (scrollY) {
    //         handleMoveScroll()
    //     }
    // }, [scrollY])

    // function handleMoveScroll() {
    //     const topHeight = Number(topRef.current?.offsetHeight)
    //     const searchHeight = topHeight + Number(searchRef.current?.offsetHeight)
    //     const saveHeight = searchHeight + Number(saveRef.current?.offsetHeight)
    //     const shopHeight = saveHeight + Number(shopRef.current?.offsetHeight)
    //     const bottomHeight = shopHeight + Number(bottomRef.current?.offsetHeight)

    //     if (position === undefined) {
    //         if (scrollY >= 0) {
    //             setPosition('down')
    //         }
    //     } else if (position === 'up') {
    //         if (scrollY > 0 && scrollY < topHeight) {
    //             window.scrollTo({
    //                 top: 0,
    //                 behavior: 'auto',
    //                 left: 0,
    //             })
    //         } else {
    //             setPosition('down')
    //         }
    //     } else if (position === 'down') {
    //         if (scrollY > 0 && scrollY < searchHeight) {
    //             window.scrollTo({
    //                 top: searchHeight,
    //                 behavior: 'auto',
    //                 left: 0,
    //             })
    //         } else {
    //             setPosition('up')
    //         }
    //     }
    // }

    return (
        <section className={styles.container} ref={containerRef}>
            <HomeTop topRef={topRef} />
            <HomeSearch searchRef={searchRef} />
            <HomeSave />
            <HomeShop />
            <HomeBottom />
        </section>
    )
}
