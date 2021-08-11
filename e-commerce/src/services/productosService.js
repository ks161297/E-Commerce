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

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        let { data } = await axios.post(URL, nuevoProducto, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerProductosPorId = async (id) => {
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw MediaError
    }
}

const editarProducto = async (productoEditado,id) =>{
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, productoEditado, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const eliminarProducto = async (id) =>{
    // try {
    //     let {data} = await axios.delete(`${URL}/${id}`)
    //     return data
    // } catch (error) {
    //     throw error
    // }
}


const subirArchivo = (imagen) => {
    return new Promise((resolve, reject) => {
        let refStorage = storage.ref(`fotos/${imagen.name}`)
        let tareaSubir = refStorage.put(imagen)

        tareaSubir.on("state_changed",
            () => {},
            (error) => {reject(error)},
            () => {
                tareaSubir.snapshot.ref.getDownloadURL()
                .then((urlImagen) => {
                    resolve(urlImagen)
                })
            }
        )
    })
}

export{
    obtenerProductos,
    crearProducto,
    obtenerProductosPorId,
    editarProducto,
    eliminarProducto,
    subirArchivo
}
