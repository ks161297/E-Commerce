import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function GrupoProductos({productos}) {
    console.log(productos)
    return (
        <div className="container">
            <div className="row mt-3">
                {productos.map((prod, i) => (
                    <div className="col-6 col-lg-3" key={i}>
                        <Link className="card mb-4" to={`/detalle/${prod.prod_id}`}>
                            <div className="card-header">
                                {prod.prod_nombre}
                            </div>
                            <div className="card-body">
                                <img
                                    src={prod.prod_imagen}
                                    className="card-img-top"
                                    alt={prod.prod_nombre}/>
                                <h5 className="card-title">{prod.prod_descripcion}</h5>
                                <span className="fw-bold">S/. {prod.prod_precio}</span>
                            </div>
                            <div className="card-footer text-muted">
                                <a  className="btn btn-primary" to={`/detalle/${prod.prod_id}`} >¡Mira lo que contiene!</a>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     
    )}