import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9900;
    width: 100%;
    height: 100%;
    background: #AC5D5D;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  
    
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    background: #AC5D5D;
` 

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: #AC5D5D;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #000;
    background: #AC5D5D;
    
`

export const SidebarMenu = styled.ul`
    display: grid;
    background: #AC5D5D;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 60px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
        
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    background: #AC5D5D;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transtion: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover { 
        color: #E6BCCB;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;    
    background: #AC5D5D;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    margin: 2px;
    background: #fff;
    align-items: center;
    white-space: nowrap;
    padding: 16px 64px;
    color: #AC5D5D;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #C89696;
        color: #AC5D5D;

    }
`