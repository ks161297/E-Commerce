import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSplotch } from 'react-icons/fa'


export const InfoContainer = styled.div`
    color:#fff;
    background: #f9f9f9;
    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    background: #fff;
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    color:#fff
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col1 col1'`)};
    }
`

export const Column1 = styled.div` 
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
` 

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
` 

export const TopLine = styled.p`
    color: #AC5D5D;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-botto: 16px;
` 

export const MenuIcon = styled(FaSplotch)`
    color: #AC5D5D;
    background: #fff;
    margin: 5px;
    margin-top: -2px;
` 

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #CDB9B9;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const Subtitle = styled.p`
    color:#fff;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
` 
export const Button = styled(Link)`
    border-radius: 50px;
    background: #AC5D5D;
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #CDB9B9;
    }
`