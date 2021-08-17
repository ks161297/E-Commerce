import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/authContext";
import {Nav, NavbarContainer, NavLogo, Navimg,  MenuIcon, MobileIcon, NavMenu, NavItem,NavLinks, NavBtn, NavBtnLink, NavIngr,NavRegi,Navlist,Navcar} from './general'
import logo from '../images/logoprincipal.png'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import { NavDropdown } from 'react-bootstrap'

const Navbar = ({toggle}) => {
    const { userState, signOut } = useContext(AuthContext)
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
                           <NavLinks to='/contactenos'
                           smooth={true}
                           duration={10}
                           spy={true}
                           exact='true'
                           offset={-80}>Contáctenos</NavLinks>
                       </NavItem>
                    
                   </NavMenu>
                   <NavBtn>
                       {userState ? (
                           <NavDropdown
                                title={
                                    <div className="d-inline">
                                        <img
                                            src={userState.photoURL}
                                            className="me-2"
                                            style={{borderRadius:"50%", width:"30px"}}
                                            alt="avatar"
                                        />
                                        <span style={{color:'#fff'}}>{userState.displayName}</span>
                                    </div>
                                }
                            >
                                <NavDropdown.Item style={{color:'#fff', background:'#AC5D5D'}} onClick={signOut}>
                                    Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        ): (
                            <NavBtnLink to='/singin'>
                                <NavIngr/>
                            </NavBtnLink>
                        )}
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