import { useContext } from 'react'
import { Container,FormWrap,IconS,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text } from './general'
import { AuthContext } from '../context/authContext'

const SignIn = () => {
    const {signIn} = useContext(AuthContext)
    return (
        <>
        <Container>
            <FormWrap>
                <IconS to="/">Handmade</IconS>
                <FormContent>
                    <Form action="#">
                        <FormButton onClick={signIn}>
                            <i className="fab fa-google me-2"/>
                            Ingresa con google
                        </FormButton>
            
                        <span className="text-center m-2"style={{color:'white'}}>ó</span>
                        <FormH1>Ingresa a tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Contraseña</FormLabel>
                        <FormInput type='password'></FormInput>
                        <FormButton type='submit'>Ingresa
                         
                        
                        </FormButton>
                        <Text>¿Olvidaste tu contraseña?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

            
        </>
    )
}

export default SignIn
