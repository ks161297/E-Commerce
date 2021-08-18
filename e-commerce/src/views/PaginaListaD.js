import { useContext } from "react"
import { ListaContext } from "../context/listaContext"

export default function ListaDeseos() {

    const { lista } = useContext(ListaContext)

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Lista De Deseos
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.prod_oferta ? "10%" : "Sin Oferta"}</td>
                            <td>S/ {prod.prod_precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
