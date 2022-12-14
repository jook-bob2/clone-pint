import React from 'react'
import styles from '@styles/home/Home.module.scss'
import Image1 from '@/assets/images/1.jpg'
import Image2 from '@/assets/images/2.jpg'
import Image3 from '@/assets/images/3.jpg'
import Image4 from '@/assets/images/4.jpg'
import Image5 from '@/assets/images/5.jpg'
import Image6 from '@/assets/images/6.jpg'
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import FacebookIcon from '@/assets/icons/facebook.png'
import GoogleIcon from '@/assets/icons/google.png'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowUp } from '@/assets/icons/arrow_up.svg'

interface Props {
    bottomRef: React.RefObject<HTMLElement> | undefined
}

const iList = [Image1, Image2, Image3, Image4, Image5, Image6]

const items = [
    {
        index: 1,
        images: iList,
    },
    {
        index: 2,
        images: iList,
    },
    {
        index: 3,
        images: iList,
    },
    {
        index: 4,
        images: iList,
    },
    {
        index: 5,
        images: iList,
    },
    {
        index: 6,
        images: iList,
    },
]

export default function HomeBottom({ bottomRef }: Props) {
    function handleClickArrowUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <article ref={bottomRef}>
            <div className={styles.bottom}>
                <button className={styles.arrow_btn} onClick={() => handleClickArrowUp()}>
                    <div className={styles.arrow_wrap}>
                        <div className={styles.icon}>
                            <ArrowUp width={20} height={20} />
                        </div>
                    </div>
                </button>
                <div className={styles.wrap}>
                    {items.map((item, itemIdx) => {
                        return (
                            <div
                                key={itemIdx}
                                className={styles.background}
                                style={{
                                    transform: `${item.index % 2 === 0 ? 'translateY(-200px)' : 'translateY(100px)'}`,
                                }}
                            >
                                {item.images.map((image, index) => (
                                    <img key={index} src={image} alt="" />
                                ))}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.cover}>
                    <div className={styles.contents}>
                        <div className={styles.left}>
                            <h1>???????????? ??? ?????? ??????????????? ?????? ?????????.</h1>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.input_area}>
                                <div className={styles.logo}>
                                    <Logo fill="var(--color-red-pushpin-500)" width={40} height={40} />
                                </div>
                                <div className={styles.title}>
                                    <h1>Pintrest??? ?????? ?????? ???????????????</h1>
                                </div>
                                <div className={styles.sub_title}>
                                    <span>????????? ??? ?????? ????????? ???????????? ??????</span>
                                </div>
                                <div className={styles.form}>
                                    <div className={styles.email}>
                                        <label htmlFor="email">?????????</label>
                                        <input type="text" id="email" placeholder="?????????" />
                                    </div>
                                    <div className={styles.passwd}>
                                        <label htmlFor="passwd">????????????</label>
                                        <input type="password" id="passwd" placeholder="??????????????? ???????????????." />
                                    </div>
                                    <div className={styles.age}>
                                        <label htmlFor="age">??????</label>
                                        <input type="text" id="age" placeholder="??????" />
                                    </div>
                                    <div className={styles.btn_continue}>
                                        <button>
                                            <span>????????????</span>
                                        </button>
                                    </div>
                                    <p className={styles.or}>??????</p>
                                    <div className={styles.btn_social_login}>
                                        <button className={styles.facebook}>
                                            <img src={FacebookIcon} alt="" />
                                            <span>Facebook?????? ????????????</span>
                                        </button>
                                        <button className={styles.google}>
                                            <img src={GoogleIcon} alt="" />
                                            <span>Google ???????????? ????????????</span>
                                        </button>
                                    </div>
                                    <div className={styles.footer}>
                                        <span>
                                            ?????? ???????????? Printest{' '}
                                            <div>
                                                <Link to={'/'}>
                                                    <span>????????? ??????</span>
                                                </Link>
                                            </div>
                                            ??? ????????????
                                            <div>
                                                <Link to={'/'}>
                                                    <span>???????????? ????????????</span>
                                                </Link>
                                            </div>
                                            ??? ???????????? ???????????? ????????? ?????? ?????????.
                                        </span>

                                        <div className={styles.already}>
                                            <span>
                                                <div>
                                                    <Link to={'/'}>
                                                        <span>?????? ??????????????????? ???????????????</span>
                                                    </Link>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.create_account}>
                                    <span>
                                        <Link to={'/'}>
                                            <span>?????? Business ?????? ?????????</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
