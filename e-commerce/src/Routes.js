import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import PaginaProductos from './views/PaginaProductos'
import Singin from "./views/Singin";
import PaginaProducto from "./views/PaginaProducto";

export default function Routes (){
    return(
        <div>
            <Route path="/" exact component={PaginaInicio}></Route>
            <Route path="/singin" exact component={Singin}></Route>
            <Route path="/detalle/:id" exact component={PaginaProducto}></Route>
            <Route path="/productos" exact component={PaginaProductos}/>
           


        </div>
    )
}