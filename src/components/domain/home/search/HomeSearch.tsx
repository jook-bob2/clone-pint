import React from 'react'
import styles from '@styles/home/Home.module.scss'
import TopRight from '@/assets/images/topRight-d.png'
import Left from '@/assets/images/left-511a.png'
import Right from '@/assets/images/right-88044.png'
import Center from '@/assets/images/center-7749.png'
import Search from '@/assets/icons/search.svg'

interface Props {
    searchRef: React.RefObject<HTMLElement> | undefined
}

export default function HomeSearch({ searchRef }: Props) {
    return (
        <article ref={searchRef} id="search">
            <div className={styles.search}>
                <div className={styles.left}>
                    <div className={styles.wrap}>
                        <div className={styles.top_right_img}>
                            <img src={TopRight} alt="" width={178} height={218} />
                        </div>
                        <div className={styles.left_img}>
                            <img src={Left} alt="" width={204} height={285} />
                        </div>
                        <div className={styles.center_img}>
                            <img src={Center} alt="" width={298} height={456} />
                        </div>
                        <div className={styles.bottom_right_img}>
                            <img src={Right} alt="" width={164} height={258} />
                        </div>
                        <div className={styles.search_item}>
                            <img src={Search} alt="" width={18} height={18} />
                            <span>닭고기로 만드는 손쉬운 저녁 메뉴</span>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>아이디어 검색</h1>
                    <p>
                        {`어떤 것을 시도해 보고 싶으세요? '닭고기로 만드는 간단한 저녁 메뉴'와 같이 관심 있는 내용을 검색하고 결과를 확인해 보세요.`}
                    </p>
                    <button>탐색</button>
                </div>
            </div>
        </article>
    )
}
