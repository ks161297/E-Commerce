import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../services/productosService";

export default function ListaProductosView() {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    }, [])

    return (
        <div>
            <h1>Catálogo de Productos</h1>
            <Link className="btn btn-primary btn-lg my-2" to='/crear'>
                <i className="fas fa-plus"></i> Registrar Producto
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Colores</th>
                        <th>Materiales</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, i) =>(
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.prod_precio}</td>
                            <td>{prod.prod_descripcion}</td>
                            <td>{prod.prod_color}</td>
                            <td>{prod.prod_material}</td>
                            <td>{prod.prod_stock}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm" to={`/editar/${prod.prod_id}`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
