import im1 from '../../images/svg1.svg'
import im2 from '../../images/svg-4.svg'
import im3 from '../../images/svg-2.svg'
import { ServicesContainer, ServicesH1,StarIcon, ServicesWrapper,ServicesIcon, ServicesH2, ServicesP, ServicesCard } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>¿Qué puedes encontrar aquí?
                <StarIcon/>
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={im1}/>
                    <ServicesH2>Tienda de regalos</ServicesH2>
                    <ServicesP> El trabajo hecho con gusto y con amor, siempre es una creación original y única - RS.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={im2}/>
                    <ServicesH2>Conócenos</ServicesH2>
                    <ServicesP> Lee un poco más sobre nuestra tienda y puedes encontrar algún tip extra.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={im3}/>
                    <ServicesH2>Contáctanos</ServicesH2>
                    <ServicesP> Si te gustaría algo más personalizado, escríbenos para consultar.</ServicesP>
                </ServicesCard>
             
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
