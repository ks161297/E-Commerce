import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './general'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
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
                            <FooterLinkTitle>Acerca de nosotros</FooterLinkTitle>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Autores</FooterLink>
                                <FooterLink to="/singin">Terminos del Servicio</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Acerca de nosotros</FooterLinkTitle>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Autores</FooterLink>
                                <FooterLink to="/singin">Terminos del Servicio</FooterLink>  
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Acerca de nosotros</FooterLinkTitle>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Acerca de Nosotros</FooterLink>
                                <FooterLink to="/singin">Autores</FooterLink>
                                <FooterLink to="/singin">Terminos del Servicio</FooterLink> 
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                                <FooterLink to="/singin">Instagram</FooterLink>
                                <FooterLink to="/singin">Facebook</FooterLink>
                                <FooterLink to="/singin">Twitter</FooterLink>
                                <FooterLink to="/singin">YouTube</FooterLink>
                                <FooterLink to="/singin"></FooterLink>
                                <FooterLink to="/singin"></FooterLink>
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
