import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, Navimg,  MenuIcon, MobileIcon, NavMenu, NavItem,NavLinks, NavBtn, NavBtnLink, NavIngr,NavRegi,Navlist,Navcar} from './NavbarElements'
import  logo from '../../images/logoprincipal.png'


const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'> 
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
                           <NavLinks to='about'>Inicio</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='Tienda'>Tienda</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='Nosotros'>Tips</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to='Contáctanos'>Nosotros</NavLinks>
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
        </>
    )
}

export default Navbar
