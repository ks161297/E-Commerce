
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';
import CarritoContextProvider from './context/carritoContext';
import ListaContextProvider from './context/listaContext';



function App() {
  return (
    <Router>
      <CarritoContextProvider>
        <ListaContextProvider>
      <Switch>
        <Routes/>
      </Switch>
      </ListaContextProvider>
      </CarritoContextProvider>
    </Router>
  )
}

export default App
