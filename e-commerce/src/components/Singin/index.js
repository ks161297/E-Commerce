import { Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text } from "./SigninElements"

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Handmade</Icon>
                <FormContent>
                    <Form action="#">
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
