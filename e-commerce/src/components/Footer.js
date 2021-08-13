import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './general'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll"
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>SOBRE NOSOTROS</FooterLinkTitle>
                                <FooterLink to="/nosotros">Nosotros</FooterLink>
                                <FooterLink to="/singin">Preguntas Frecuentes</FooterLink>
                                <FooterLink to="/singin">Política de Envíos</FooterLink>
                                <FooterLink to="/singin">Autores</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>CONFIANZA</FooterLinkTitle>
                                <FooterLink to="/singin">Compra Segura</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>  
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>SERVICIO AL CLIENTE</FooterLinkTitle>
                                <FooterLink to="/singin">Cambios</FooterLink>
                                <FooterLink to="/singin">Política de Venta</FooterLink> 
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>ENCUÉNTRANOS EN</FooterLinkTitle>
                                <FooterLink to="/singin">
                                    <FaFacebook/>
                                </FooterLink>
                                <FooterLink to="/singin">
                                    <FaInstagram/>
                                </FooterLink>
                                <FooterLink to="/singin">
                                    <FaTwitter/>
                                </FooterLink>
                                <FooterLink to="/singin">
                                    <FaYoutube/>    
                                </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>ÚNETE A NOSOTROS</FooterLinkTitle>
                                <FooterLink to="/singin">Instagram</FooterLink>
                                <FooterLink to="/singin">Facebook</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Handmade by Aylin & Marigrace
                        </SocialLogo>
                        <WebsiteRights>HM © {new Date().getFullYear()} Todos los derechos reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/" target="_blank"
                            aria-label="YouTube">
                                <FaYoutube/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
