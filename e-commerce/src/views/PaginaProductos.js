import { useState, useEffect, useRef } from 'react'
import { obtenerProductos } from '../services/productoService'
import Loading from '../components/Loading'
import GrupoProductos from '../components/GrupoProductos';
import Slider from '@material-ui/core/Slider';
import Navbar from '../components/Navbar';

import { ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import { FaGifts, FaSearch } from 'react-icons/fa';

export default function PaginaProductos() {
    const [productos, setProductos] = useState([])
    const [productosOriginal, setProductosOriginal] = useState([])
    const [cargando, setCargando] = useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1, 100])
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const inputBusqueda = useRef()

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }

    const ejecutarBusqueda = async () => {
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        setProductos(productosFiltrados)
    }

    useEffect(() => {
        getProductos()
    }, [])

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod) => {
            return prod.prod_precio >= filtroPrecio[0] && prod.prod_precio <= filtroPrecio[1]
        })
        setProductos(productosFiltrados)
    }, [filtroPrecio])

    return (
        
        <div>
            <Navbar toggle={toggle}/>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="my-4">
                        <FaGifts/>
                        Nuestros Productos
                    </h1>
                    <div className="row my-2">
                       <div className="col-sm-12 col-md-6">
                           <h5>Filtrar Por precio</h5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={1}
                                max={120}
                            />
                       </div>

                       <div className="col-sm-12 col-md-6">
                           <h5>Filtro por nombre</h5>
                           <div className="d-flex gap-1">
                               <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ingrese el nombre o descripción"
                                    ref={inputBusqueda}
                               />
                               <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                                    <FaSearch/>
                               </button>
                           </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            Otras maneras de filtrar
                            <div className="d-flex gap-1">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" >
                                     Selecciona una opción
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                         
                        </div>

                    </div>
                </div>
                <GrupoProductos productos={productos} />
            </div>)}
        </div>
        
    )
}
