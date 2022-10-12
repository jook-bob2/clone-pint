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
                            <h1>가입하여 더 많은 아이디어를 만나 보세요.</h1>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.input_area}>
                                <div className={styles.logo}>
                                    <Logo fill="var(--color-red-pushpin-500)" width={40} height={40} />
                                </div>
                                <div className={styles.title}>
                                    <h1>Pintrest에 오신 것을 환영합니다</h1>
                                </div>
                                <div className={styles.sub_title}>
                                    <span>시도해 볼 만한 새로운 아이디어 찾기</span>
                                </div>
                                <div className={styles.form}>
                                    <div className={styles.email}>
                                        <label htmlFor="email">이메일</label>
                                        <input type="text" id="email" placeholder="이메일" />
                                    </div>
                                    <div className={styles.passwd}>
                                        <label htmlFor="passwd">비밀번호</label>
                                        <input type="password" id="passwd" placeholder="비밀번호를 입력하세요." />
                                    </div>
                                    <div className={styles.age}>
                                        <label htmlFor="age">나이</label>
                                        <input type="text" id="age" placeholder="나이" />
                                    </div>
                                    <div className={styles.btn_continue}>
                                        <button>
                                            <span>계속하기</span>
                                        </button>
                                    </div>
                                    <p className={styles.or}>또는</p>
                                    <div className={styles.btn_social_login}>
                                        <button className={styles.facebook}>
                                            <img src={FacebookIcon} alt="" />
                                            <span>Facebook으로 계속하기</span>
                                        </button>
                                        <button className={styles.google}>
                                            <img src={GoogleIcon} alt="" />
                                            <span>Google 계정으로 계속하기</span>
                                        </button>
                                    </div>
                                    <div className={styles.footer}>
                                        <span>
                                            계속 진행하면 Printest{' '}
                                            <div>
                                                <Link to={'/'}>
                                                    <span>서비스 약관</span>
                                                </Link>
                                            </div>
                                            에 동의하고
                                            <div>
                                                <Link to={'/'}>
                                                    <span>개인정보 보호정책</span>
                                                </Link>
                                            </div>
                                            을 읽었음을 인정하는 것으로 간주 됩니다.
                                        </span>

                                        <div className={styles.already}>
                                            <span>
                                                <div>
                                                    <Link to={'/'}>
                                                        <span>이미 회원이신가요? 로그인하기</span>
                                                    </Link>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.create_account}>
                                    <span>
                                        <Link to={'/'}>
                                            <span>무료 Business 계정 만들기</span>
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
