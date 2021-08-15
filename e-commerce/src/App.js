import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';
import NavTop from './components/Navbar'
import {AuthContextProvider} from "./context/authContext"




function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <NavTop/>
          <Routes/>
        </Switch>
      </AuthContextProvider>
    </Router>
  )
}


export default App

