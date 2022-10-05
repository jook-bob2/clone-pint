import React from 'react'
import styles from '@styles/Layout.module.scss'
import styled from 'styled-components'
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Container = styled.header`
    display: flex;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    width: 100%;
`

const LogoView = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
`

const MenuView = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
`

const MenuUl = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
`

const MenuLi = styled.li`
    margin: 0 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`

const Span = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #111111;
`

const ButtonView = styled.div`
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-self: center;
`

export default function Header() {
    return (
        <Container className={styles.header} id="header">
            <Content>
                <Link to="/">
                    <LogoView>
                        <Logo fill="#e60023" width={32} height={32} />
                        <div className={styles.title_wrap}>
                            <h1>Pinterest</h1>
                        </div>
                    </LogoView>
                </Link>

                <MenuView>
                    <MenuUl>
                        <MenuLi>
                            <Link to="/intro">
                                <Span>소개</Span>
                            </Link>
                        </MenuLi>
                        <MenuLi>
                            <Link to="/business">
                                <Span>비즈니스</Span>
                            </Link>
                        </MenuLi>
                        <MenuLi style={{ marginRight: 24 }}>
                            <Link to="/press">
                                <Span>언론</Span>
                            </Link>
                        </MenuLi>
                    </MenuUl>
                    <ButtonView>
                        <button className={`${styles.btn} ${styles.login}`}>
                            <span>로그인</span>
                        </button>
                        <button className={`${styles.btn} ${styles.join}`}>
                            <span>가입하기</span>
                        </button>
                    </ButtonView>
                </MenuView>
            </Content>
        </Container>
    )
}
