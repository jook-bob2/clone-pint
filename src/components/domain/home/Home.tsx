import React, { useEffect, useRef } from 'react'
import styles from '@styles/home/Home.module.scss'
import HomeTop from './top/HomeTop'
import HomeSearch from './search/HomeSearch'
import HomeSave from './save/HomeSave'
import HomeShop from './shop/HomeShop'
import HomeBottom from './bottom/HomeBottom'
import useScroll from '@/hooks/useScroll'

export default function Home() {
    const { scrollY, direction, setLoading, loading } = useScroll()
    const containerRef = useRef<HTMLElement>(null)
    const topRef = useRef<HTMLElement>(null)
    const searchRef = useRef<HTMLElement>(null)
    const saveRef = useRef<HTMLElement>(null)
    const shopRef = useRef<HTMLElement>(null)
    const bottomRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (scrollY && !loading) {
            handleMoveScroll()
        }
    }, [scrollY, direction])

    function handleMoveScroll() {
        setLoading(true)
        const headerHeight = Number(document.getElementById('header')?.offsetHeight)
        const offset = 10
        const topHeight = headerHeight
        const searchHeight = topHeight + Number(topRef.current?.offsetHeight)
        const saveHeight = searchHeight + Number(searchRef.current?.offsetHeight)
        const shopHeight = saveHeight + Number(saveRef.current?.offsetHeight)
        const bottomHeight = shopHeight + Number(shopRef.current?.offsetHeight)

        if (direction === 'up') {
            if (scrollY > 0 && scrollY < topHeight) {
                scrollTo(0)
            } else if (scrollY > topHeight && scrollY < searchHeight) {
                scrollTo(topHeight)
            } else if (scrollY > searchHeight && scrollY < saveHeight) {
                scrollTo(searchHeight)
            } else if (scrollY > saveHeight && scrollY < shopHeight) {
                scrollTo(saveHeight)
            } else if (scrollY > shopHeight && scrollY < bottomHeight) {
                scrollTo(shopHeight)
            }
        } else if (direction === 'down') {
            if (scrollY > 0 && scrollY < topHeight) {
                scrollTo(topHeight)
            } else if (scrollY > topHeight + offset && scrollY < searchHeight) {
                scrollTo(searchHeight)
            } else if (scrollY > searchHeight + offset && scrollY < saveHeight) {
                scrollTo(saveHeight)
            } else if (scrollY > saveHeight + offset && scrollY < shopHeight) {
                scrollTo(shopHeight)
            } else if (scrollY > shopHeight + offset && scrollY < bottomHeight) {
                scrollTo(bottomHeight)
            }
        }
    }

    function scrollTo(height: number) {
        window.scrollTo({
            top: height,
            behavior: 'smooth',
        })
    }

    return (
        <section className={styles.container} ref={containerRef}>
            <HomeTop topRef={topRef} />
            <HomeSearch searchRef={searchRef} />
            <HomeSave saveRef={saveRef} />
            <HomeShop shopRef={shopRef} />
            <HomeBottom bottomRef={bottomRef} />
        </section>
    )
}
