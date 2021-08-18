import { useState, useEffect, useContext } from 'react'
import {Nav, NavbarContainer, NavLogo, Navimg,  MenuIcon, MobileIcon, NavMenu, NavItem,NavLinks, NavBtn, NavBtnLink, NavIngr,NavRegi,Navlist,Navcar} from './general'
import logo from '../images/logoprincipal.png'
import { IconContext } from 'react-icons/lib'

import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 40){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}> 
                   <Navimg 
                        src={logo} 
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />
                        HM
                    </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <MenuIcon />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to='/'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Inicio</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='/productos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Tienda</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='/productos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Tips</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='Contáctanos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Nosotros</NavLinks>
                       </NavItem>
                    
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to='/singin'>
                           <NavIngr/>
                       </NavBtnLink>
                       <NavBtnLink to='/registrarse'>
                           <NavRegi/>
                       </NavBtnLink>
                       <NavBtnLink to='/lista'>
                           <Navlist/>
                       </NavBtnLink>
                       <NavBtnLink to='/carrito'>
                           <Navcar/>
                       </NavBtnLink>
                   </NavBtn>
               
               </NavbarContainer>
           </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar