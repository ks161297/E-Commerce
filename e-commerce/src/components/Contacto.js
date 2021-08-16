import React from 'react'
import Navbar from '../components/Navbar'
import {Contacto,Contenido,Info,Icono,Texto,ContactForm,InputBox} from './general'

export default function ContactoView() {
    return (
        <div>
            <h2>Contáctenos</h2>
            <Contacto>
                <Contenido>
                    <Info>
                        <Icono>
                            <i className="fas fa-map-marker-alt" />
                        </Icono>
                        <Texto>
                            <h3>Dirección</h3>
                            <p>Av.Miraflores 3562</p>
                        </Texto>
                    </Info>
                    <Info>
                        <Icono>
                            <i className="fas fa-envelope" />
                        </Icono>
                        <Texto>
                            <h3>Correo</h3>
                            <p>handmadeM&A@hotmail.com</p>
                        </Texto>
                    </Info>
                    <Info>
                        <Icono>
                            <i className="fas fa-phone" />
                        </Icono>
                        <Texto>
                            <h3>Celular</h3>
                            <p>995654526</p>
                        </Texto>
                    </Info>
                </Contenido>
                <ContactForm>
                    <form>
                        <InputBox>
                            <label>Nombre y Apellido:</label>
                            <input />
                        </InputBox>
                        <InputBox>
                            <label>Correo Electrónico:</label>
                            <input />
                        </InputBox>
                        <InputBox>
                            <label>Asunto:</label>
                            <input />
                        </InputBox>
                        <InputBox>
                            <button>Enviar</button>
                        </InputBox>
                    </form>
                </ContactForm>

            </Contacto>
        </div>
    )
}
