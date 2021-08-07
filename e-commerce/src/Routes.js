import {Route} from "react-router-dom"
import ListaProductosView from "./views/Productos/ListaProductosView"
import CrearProductoView from "./views/Productos/CrearProductoView"
import EditarProductoView from "./views/Productos/EditarProductoView"

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
        </div>
    )
}