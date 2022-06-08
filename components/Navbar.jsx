import React from 'react'
import { keyframes, useTheme } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import styled from "@emotion/styled";
import motion from 'framer-motion'

const Container = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Manrope; sans-serif;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
    padding: 8px;
    color: ${props => props.theme.bg};
    font-size: 24px;
    font-weight: 500;
`

const Links  = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 16px;
    & a: {
        fontSize: 17px;
        fontWeight: 500;
        color: ${props => props.theme.secondary};
    };
    @media (max-width: 480px) {
        display: none;
    }
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

const rotateTop = keyframes`
    0% {
        transform: translateY(6px);
    }
    50% {
        transform: translateY(0)
    }
    100% {
        transform: translateY(0) rotate(45deg)
    }
`

const SpanTop = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.primary};
`

const SpanMiddle = styled.div`
    height: 2px;
    width: 60%;
    background-color: ${props => props.theme.primary};
    visibility: ${props => props.open ? 'hidden' : 'visible'};
    opacity: ${props => props.open ? 0 : 1};
    transition: all 0.3s;
`

const SpanBottom = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.primary};
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(-6px)'};
    transition: all 0.3s;
`

const MobileMenu = styled.div`
    display: flex;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    position: fixed;
    top: 72px;
    height: fit-content;
    width: calc(100% - 32px);
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    align-items: center;
    background-color: ${props => props.theme.bg};
    border-radius: 10px;
    box-shadow: 0 2px 15px 2px rgba(0,0,0, 0.2);
    font-size: 17px;
    transition: all 0.3s;
`

const variants = {
    open: {
        opacity: [0, 0.5, 1],
        rotate: [0, 0, 45],
        y: [6, 0, 0]
    },
    closed: {
        opacity: [1, 0,5, 0],
        rotate: [45, 0, 0],
        y: [0, 0, 6]
    }
}

function Navbar() {
    const [open, setOpen] = React.useState(false)

  return (
    <Container>
        <Logo>
            J
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
                animate={open ? 'open' : 'closed'}
                variants={variants}
            />
            <SpanMiddle open={open}/>
            <SpanBottom open={open} key='spanBottom'/>
        </MobileBurger>
        <MobileMenu open={open}>
            <Link href={'/'}>
                <a>Portfolio</a>
            </Link>
            <Link href={'/'}>
                <a>Contact</a>
            </Link >
            <Button>
                Resume
            </Button>
        </MobileMenu>
    </Container>
  )
}

export default Navbar