import {useState, useEffect, useContext} from 'react'
import {useParams} from "react-router-dom"
import {obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'
import {useHistory} from 'react-router'

export default function ProductoView() {
    const [producto, setProductos] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    const history = useHistory()

    const getProducto = async () =>{
        try {
            let productosObtenido = await obtenerProductoPorId(id)
            setProductos(productosObtenido)
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getProducto()
    },[])

    return (
        <div>
            {cargando ? (<Loading/>) : 
            (<div>
                <div className="container">
                    <h2 className="fw-bold">{producto.prod_nombre}</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img
                                className="img-fluid"
                                src={producto.prod_imagen}
                                alt={producto.prod_nombre}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripción</h5>
                            <p>{producto.prod_descripcion}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/ {producto.prod_precio}
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                                <button className="btn  btn-lg"
                                        style={{color:'white',backgroundColor:'#CDB9B9'}}
                                >
                                    <li className="fas fa-shopping-cart me-2"/>
                                    Agregar a Carrito
                                </button>
                                <button className="btn  btn-lg"
                                        style={{color:'white',backgroundColor:'#AC5D5D'}}
                                
                                >
                                    <li className="fas fa-heart me-2"/>
                                    Agregar a Favoritos
                                </button>
                        </div>

                    </div>
                </div>
            </div>)} 
        </div>
    )
}
