import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'
import { useHistory } from 'react-router'
import { Navbar } from 'react-bootstrap';

export default function ProductoView() {
    const [producto, setProductos] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    const history = useHistory()

    const getProducto = async () => {
        try {
            let productosObtenido = await obtenerProductoPorId(id)
            setProductos(productosObtenido)
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div>
            <Navbar />
            {cargando ? (<Loading />) :
                (<div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <img
                                    className="img-fluid"
                                    src={producto.prod_imagen}
                                    alt={producto.prod_nombre}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="text-center">
                                    <h1 className="fw-bold " style={{ color: '#903535' }}>{producto.prod_nombre}</h1>
                                </div>
                                <div className="mt-3 mb-3">
                                    <h4 className="fw-bold" style={{ color: '#BF7C7C' }}>Color:</h4>
                                    <h5>{producto.prod_color}</h5>
                                    <h4 className="fw-bold" style={{ color: '#BF7C7C' }}>Material:</h4>
                                    <h5 >{producto.prod_material}</h5>
                                    <h4 className="fw-bold" style={{ color: '#BF7C7C' }}>Descripción</h4>
                                    <p>{producto.prod_descripcion}</p>
                                    <h4 className="fw-bold" style={{ color: '#BF7C7C' }}>Precio:</h4>
                                    <h5 >S/. {producto.prod_precio}</h5>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn  btn-lg me-2"
                                        style={{ color: 'white', backgroundColor: '#CDB9B9' }}
                                    >
                                        <li className="fas fa-shopping-cart me-2" />
                                        Agregar a Carrito
                                    </button>

                                    <button className="btn  btn-lg"
                                        style={{ color: 'white', backgroundColor: '#AC5D5D' }}
                                    >
                                        <li className="fas fa-heart me-2" />
                                        Agregar a Favoritos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
