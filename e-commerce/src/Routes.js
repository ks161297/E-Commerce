import { Route } from "react-router";
import PaginaInicio from './views/PaginaInicio'
import Singin from "./views/Singin";

export default function Routes (){
    return(
        <div>
            <Route path="/" exact component={PaginaInicio}></Route>
            <Route path="/Singin" exact component={Singin}></Route>

        </div>
    )
}