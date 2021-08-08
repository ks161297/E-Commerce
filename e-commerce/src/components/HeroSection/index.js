import { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, Herobg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper, Button, ArrowForward, ArrowRight } from './HeroElements' 

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <Herobg>
             <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> 
            </Herobg>
            <HeroContent>
            <HeroH1>¡BIENVENID@!</HeroH1>
            <HeroP> Para hacer las cosas bien es necesario: primero, el amor, segundo, la técnica. :)</HeroP>
            <HeroBtnWrapper>
                <Button to="/registro" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}> Regístrate {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
