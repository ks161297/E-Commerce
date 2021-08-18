
import styled from "styled-components";
import { FaHandHoldingHeart, FaCartArrowDown, FaHeart } from "react-icons/fa";

/**Productos */

export const IconGiftF = styled(FaHandHoldingHeart)`
    color: #ac5d5d;
    background: #fff;
    height:35px;
    width: 35px;
    margin: 3px;
`

export const ProdTitle = styled.h1`
    color: #ac5d5d;
    text-align: center;
    padding 0 20px;
`

/**Detalle Producto */

export const DetProContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    z-index: 1;
    padding: 0 24px;
    width: 1900px;
    height: 700px;
    border-radius: 20px;
    
    
    
    
`

export const DetFIlas = styled.div`
justify-content: center;
align-items: center;

`
export const ImagenContainer =styled.div`
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    
` 
export const ImagenProd = styled.img`
    width: 640px;
    height: 480px;
    justify-content: center;
    align-items: center;
    margin-top:13%;
    border-radius: 20px;
`
export const ContainerBody = styled.div`
    margin-top:5%;
    text-align:center;
    align-items: center;
    justify-content: center;
`
export const CardBody = styled.div`
    align-items: center;
    justify-content: center;
    text-align:center;

`
export const DeTitulo = styled.h2`
    text-align:center;
    align-items: center;
    justify-content: center;
    color:#ac5d5d;
`

export const DeDescr = styled.h5`
    text-align:center;
    color:gray;

`
export const DetPrecio = styled.span`
    text-align:center;

`


export const BtnContainer = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    text-align:center;
`

export const DetButton = styled.button`
    border-radius: 40px;
    background: #AC5D5D;
    white-space: nowrap;
    margin: 5px;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border: none;
    cursor: pointer;
`
export const IconCarrito = styled(FaCartArrowDown)`
    color: #FFF;
    background: #ac5d5d;
    height:35px;
    width: 35x;
    margin:2px;
`
export const IconLista = styled(FaHeart)`
    color: #FFF;
    background: #ac5d5d;
    height:35px;
    width: 35x;
    margin:2px;
    
`