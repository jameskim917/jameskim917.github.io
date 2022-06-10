import React from 'react'
import { keyframes, useTheme } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import styled from "styled-components";
import {motion} from 'framer-motion'

const Container = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Manrope, sans-serif;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: ${props => props.theme.bg};
    border: 2px solid ${props => props.theme.primary};
    border-radius: 15px;
    padding: 8px;
`

const LogoJ = styled.h6`
    font-size: 24px;
    font-weight: 400;
    font-family: Pacifico, sans-serif;
    color: ${props => props.theme.primary};
`

const Links  = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 480px) {
        display: none;
    }
`

const LinkContainer = styled.div`
    fontSize: 17px;
    fontWeight: 500;
    color: ${props => props.theme.primary};
    padding: 8px 0;
`

const ResumeContainer = styled.div`
    fontSize: 17px;
    fontWeight: 500;
    color: ${props => props.theme.blue};
    padding: 8px 16px;
    border: 2px solid ${props => props.theme.blue};
    border-radius: 10px;
`

const Button = styled.button`
    height: fit-content;
    width: fit-content;
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.blue};
    border-width: 0;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 17px;
    font-weight: 500;
    font-family: Manrope, sans-serif;
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
const MobileBurger = styled.div`
    @media (min-width: 481px) {
        display: none; 
    }
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        padding: 8px;
    }
`

// const rotateTop = keyframes`
//     0% {
//         transform: translateY(6px);
//     }
//     50% {
//         transform: translateY(0)
//     }
//     100% {
//         transform: translateY(0) rotate(45deg)
//     }
// `

const SpanTop = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.primary};
    transform: translateY(-4px);
`

const SpanMiddle = styled.div`
    height: 2px;
    width: 60%;
    background-color: ${props => props.theme.primary};
    opacity: ${props => props.open ? 0 : 1};
    transition: all 0.3s;
`

const SpanBottom = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.primary};
    transform: translateY(4px);
`

const MobileMenu = styled.div`
    display: flex;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    position: absolute;
    top: 72px;
    height: fit-content;
    width: calc(100% - 32px);
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    align-items: center;
    background-color: ${props => props.theme.bg};
    border-radius: 10px;
    border: 2px solid ${props => props.theme.primary};
    box-shadow: 0 5px 15px 2px rgba(0,0,0, 0.2);
    font-size: 20px;
    transition: all 0.3s;
    z-index: 5;
`

const MobileMenuBackdrop = styled.div`
    background: transparent;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
`

const variantsTop = {
    openTop: {
        rotate: [0, 0, 45],
        y: [0, 2, 2]
    },
    closedTop: {
        rotate: [45, 0, 0],
        y: [2, 2, -4]
    }
}

const variantsBottom = {
    openBottom: {
        rotate: [0, 0, -45],
        y: [0, -2, -2]
    },
    closedBottom: {
        rotate: [-45, 0, 0],
        y: [-2, -2, 4]
    }
}

function Navbar() {
    const [open, setOpen] = React.useState()

  return (
    <Container>
        <Logo>
            <LogoJ>J</LogoJ>
        </Logo>
        <Links>
            <Link href={'/'}>
                <a>Portfolio</a>
            </Link>
            <Link href={'/'}>
                <a>Contact</a>
            </Link >
            <Button>
                Resume
            </Button>
        </Links>
        {/* Mobile menu burger */}
        <MobileBurger onClick={() => setOpen(!open)}>
            <SpanTop as={motion.div} open={open} key='spanTop'
                animate={open ? 'openTop' : open === false ? 'closedTop' : undefined}
                variants={variantsTop}
            />
            <SpanMiddle open={open}/>
            <SpanBottom as={motion.div} open={open} key='spanBottom'
                animate={open ? 'openBottom' : open === false ? 'closedBottom' : undefined}
                variants={variantsBottom}
            />
        </MobileBurger>
        <MobileMenu open={open}>
            <LinkContainer>
                <Link href={'/'}>
                    <a>Portfolio</a>
                </Link>
            </LinkContainer>
            <LinkContainer>
                <Link href={'/'}>
                    <a>Contact</a>
                </Link >
            </LinkContainer>
            <ResumeContainer>
                Resume
            </ResumeContainer>
        </MobileMenu>
        {open && <MobileMenuBackdrop onClick={() => open && setOpen(false)} />}
    </Container>
  )
}

export default Navbar