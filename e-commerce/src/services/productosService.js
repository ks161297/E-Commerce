import axios from "axios"
import { storage } from "../config/Firebase"

const URL = `${process.env.REACT_APP_API}productos`

const obtenerProductos = async () =>{
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

export{
    obtenerProductos
}
