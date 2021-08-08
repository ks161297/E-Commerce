import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import { FaBars, FaCartArrowDown, FaHeart, FaUser, FaUserPlus } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #AC5D5D;
    height: 80px;
    margint-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
` 

export const NavbarContainer = styled.div`
    background: #AC5D5D;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100;
`

export const NavLogo = styled(LinkR)`
    background: #AC5D5D;
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;

    &:hover { 
        color: #CDB9B9;
        transition: 0.2s ease-in-out;
    }
`
export const Navimg = styled.img`
    color: #fff;
    background: #AC5D5D;
`
export const MenuIcon = styled(FaBars)`
    color: #fff;
    background: #AC5D5D;
    margin-top: -30px;
` 
export const MobileIcon = styled.div`
    display: none;
    background: #AC5D5D;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        background: #AC5D5D;
        color: #FFF;
    }
`
export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    background: #AC5D5D;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    background: #AC5D5D;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    background: #AC5D5D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin:9px;
    height: 100%;
    cursor: pointer;

    &.active {
        border-botton: 3px solid #01bf71
    }
    &:hover { 
        color: #CDB9B9;
        transition: 0.2s ease-in-out;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    background: #AC5D5D;
    @media screen and (max-width: 768px){
        display: none;
    }
` 
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #AC5D5D;
    // white-space: nowrap;
    margin: 0.5px;
    padding: 5px 15px;
    color: #AC5D5D;
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoaration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #AC5D5D;        
    }
`
export const NavIngr = styled(FaUser)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`
export const NavRegi = styled(FaUserPlus)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`
export const Navlist = styled(FaHeart)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`
export const Navcar = styled(FaCartArrowDown)`
    color: #fff;
    background: #AC5D5D;
    height:15px;
    width: 15px;
`