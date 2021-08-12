import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';
import NavTop from './components/Navbar'




function App() {
  return (
    <Router>
      <Switch>
        <NavTop/>
        <Routes/>
      </Switch>
    </Router>
  )
}


export default App

