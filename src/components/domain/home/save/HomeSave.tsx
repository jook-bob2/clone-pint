import React from 'react'
import styles from '@styles/home/Home.module.scss'
import FutureHome1 from '@/assets/images/future-home-1.png'
import FutureHomeChild1 from '@/assets/images/future-home1-child-1.png'
import FutureHomeChild2 from '@/assets/images/future-home1-child-2.png'
import FutureHomeChild3 from '@/assets/images/future-home1-child-3.png'
import FutureHome2 from '@/assets/images/future-home-2.png'
import FutureHome3 from '@/assets/images/future-home-3.png'
import FutureHome4 from '@/assets/images/future-home-4.png'
import FutureHome5 from '@/assets/images/future-home-5.png'

interface Props {
    saveRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeSave({ saveRef }: Props) {
    return (
        <article ref={saveRef}>
            <div className={styles.save}>
                <div className={styles.text_area}>
                    <h1>좋아하는 아이디어를 저장하세요.</h1>
                    <p>나중에 다시 볼 수 있도록 좋아하는 콘텐츠를 수집하세요.</p>
                    <button>탐색</button>
                </div>
                <div className={styles.img_area}>
                    <div className={styles.wrap}>
                        <button className={styles.home1}>
                            <img src={FutureHome1} width={400} height={420} alt="" />
                            <div className={styles.desc}>
                                <h1>집 분위기 바꾸기: 양치식 물</h1>
                            </div>
                            <div className={styles.home1_child}>
                                <img src={FutureHomeChild1} width={90} height={130} alt="" />
                                <img src={FutureHomeChild2} width={90} height={130} alt="" />
                                <img src={FutureHomeChild3} width={90} height={130} alt="" />
                            </div>
                        </button>
                        <button className={styles.home2}>
                            <img src={FutureHome2} width={223} height={235} alt="" />
                            <div className={styles.desc}>
                                <h1>스칸디나비아풍 침실</h1>
                            </div>
                        </button>
                        <button className={styles.home3}>
                            <img src={FutureHome3} width={165} height={173} alt="" />
                            <div className={styles.desc}>
                                <h1>꿈의 데크</h1>
                            </div>
                        </button>
                        <button className={styles.home4}>
                            <img src={FutureHome4} width={223} height={235} alt="" />
                            <div className={styles.desc}>
                                <h1>멋진 음료 서빙</h1>
                            </div>
                        </button>
                        <button className={styles.home5}>
                            <img src={FutureHome5} width={223} height={235} alt="" />
                            <div className={styles.desc}>
                                <h1>화장실 업그레이드</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}
