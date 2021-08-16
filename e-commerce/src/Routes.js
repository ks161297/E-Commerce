
import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import PaginaProductos from './views/PaginaProductos'
import Singin from "./views/Singin";
import PaginaProducto from "./views/PaginaProducto";
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"
import ProductoView from "./views/ProductoView";

export default function Routes (){
    return(
        <div>
            <Route path="/" exact component={PaginaInicio}/>
            <Route path="/singin" exact component={Singin}/>
            <Route path="/detalle/:id" exact component={ProductoView}/>
            <Route path="/productos" exact component={PaginaProductos}/>
            <Route path="/listaProductos" exact component={ListaProductosView} />
            <Route path="/crear" exact component={CrearProductoView} />
            <Route path="/editar/:id" exact component={EditarProductoView} />
        </div>
    )
}