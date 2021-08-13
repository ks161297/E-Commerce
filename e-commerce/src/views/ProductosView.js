import {useState, useEffect, useRef} from "react"
import { obtenerProductos} from "../services/productosService"
import Loading from '../components/Loading'
import GroupProducts from '../components/GroupProducts'

export default function ProductosView() {
    const [productos,setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const inputBusqueda = useRef()
    
    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            // setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const ejecutarBusqueda = async() =>{
        // console.log(inputBusqueda.current.value)
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        setProductos(productosFiltrados)
    }

    useEffect(() =>{
        getProductos()
    }, [])

  

    return (
        <div>
            {cargando ?
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <h2 style={{color:'#BF7C7C'}}>
                        Tienda de Productos
                    </h2>
                    <div className="row my-2">
                        <div className="col-sm-12 col-md-6">
                            <h5 style={{color:'#AC5D5D'}}>Buscar Producto:</h5>
                            <div className="d-flex gap-1">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}
                                />
                                <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                                    <i className="fas fa-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <GroupProducts productos={productos} />
            </div>)}
        </div>
    )
}
