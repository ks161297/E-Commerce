
import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import PaginaProductos from './views/PaginaProductos'
import Singin from "./views/Singin";
import PaginaProducto from "./views/PaginaProducto";
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"

export default function Routes (){
    return(
        <div>
            <Route path="/" exact component={PaginaInicio}></Route>
            <Route path="/singin" exact component={Singin}></Route>
            <Route path="/detalle/:id" exact component={PaginaProducto}></Route>
            <Route path="/productos" exact component={PaginaProductos}/>
            <Route path="/listaProductos" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
        </div>
    )
}