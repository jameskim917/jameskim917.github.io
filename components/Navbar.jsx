import React from 'react'
import Link from 'next/link'
import styled from "styled-components";
import {motion} from 'framer-motion'
import useOnClickOutside from '../utils/useOnClickOutside';

const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    padding: 0 16px;
    font-family: Manrope, sans-serif;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 8px;
`

const LogoJ = styled.h6`
    font-size: 24px;
    font-weight: 400;
    font-family: Pacifico, sans-serif;
    color: #fff;
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
    color: #fff;
    transition: all 0.3s;
`

const Navlink = styled.h6`
    font-size: 16px;
    font-weight: 500;
    color: #00366C;
    padding: 8px 0;
    @media (min-width: 480px) {
        color: #fff;
        padding: 0;
        &:hover {
            color: rgb(31, 102, 142);
        }
    }
    transition: all 0.3s;
    cursor: pointer;
`

const ResumeContainer = styled.div`
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    padding: 8px 16px;
    background-color: #00366C;
    border-radius: 25px;
`

const Button = styled.button`
    height: fit-content;
    width: fit-content;
    color: #fff;
    background: linear-gradient(rgba(0, 54, 108, 1), rgba(0, 54, 108, 0.65));
    box-shadow: 0 2px 15px 2px rgba(0, 54, 108, 0.2);
    border-radius: 25px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    font-family: Manrope, sans-serif;
    @media (max-width: 480px) {
        font-size: 20px;
    }
    &:hover {
        filter: brightness(1.5);
    }
    transition: all 0.3s;
    cursor: pointer;
    &:active {
        filter: brightness(0.9);
    }
`

const MobileMenuContainer = styled.div`
    height: fit-content;
    width: fit-content;
    position: relative;
    @media (min-width: 481px) {
        display: none; 
    }
`

const MobileBurger = styled.div`
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

const SpanTop = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.bg};
    transform: translateY(-4px);
`

const SpanMiddle = styled.div`
    height: 2px;
    width: 60%;
    background-color: ${props => props.theme.bg};
    opacity: ${props => props.open ? 0 : 1};
    transition: all 0.3s;
`

const SpanBottom = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.bg};
    transform: translateY(4px);
`

const MobileMenu = styled.div`
    display: flex;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    position: absolute;
    top: 100%;
    right: 0;
    height: auto;
    width: calc(100vw - 32px);
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    border-radius: 25px;
    border: 1px solid #dddddd;
    box-shadow: 0 5px 15px 2px rgba(255, 255, 255, 0.2);
    font-size: 20px;
    transition: all 0.3s;
    z-index: 5;
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

function Navbar(props) {
    const {portfolioRef, contactRef} = props
    const [open, setOpen] = React.useState()
    const menuRef = React.useRef(null)
    useOnClickOutside(menuRef, () => setOpen(false))

  return (
    <Container>
        <Logo>
            <LogoJ>J.</LogoJ>
        </Logo>
        <Links>
            <Navlink onClick={() => portfolioRef.current.scrollIntoView()}>Portfolio</Navlink>
            <Navlink onClick={() => contactRef.current.scrollIntoView()}>Contact</Navlink>
            <a href="https://drive.google.com/drive/folders/1Wx-mVoF-IQgYoNRLU7P8K89meSM34P5d" target="_blank" rel="noreferrer">
                <Button>
                    Resume
                </Button>
            </a>
        </Links>
        {/* Mobile menu burger */}
        <MobileMenuContainer ref={menuRef}>
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
                <Navlink onClick={() => portfolioRef.current.scrollIntoView()}>Portfolio</Navlink>
                <Navlink onClick={() => contactRef.current.scrollIntoView()}>Contact</Navlink>
                <ResumeContainer>
                    Resume
                </ResumeContainer>
            </MobileMenu>
        </MobileMenuContainer>
    </Container>
  )
}

export default Navbar