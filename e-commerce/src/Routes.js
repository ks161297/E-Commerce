import {Route} from "react-router-dom"
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"
import ProductoView from "./views/ProductoView"

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
            <Route path="/detalle/:id" exact component={ProductoView}/>
        </div>
    )
}