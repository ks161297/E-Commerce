import { Container,FormWrap,IconS,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text } from './general'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <IconS to="/">Handmade</IconS>
                <FormContent>
                    <Form action="#">
                        <FormButton type='submit' onClick={SignIn}>
                            <i className="fab fa-google me-2"/>
                            Ingresa con google
                        </FormButton>
                        ó
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