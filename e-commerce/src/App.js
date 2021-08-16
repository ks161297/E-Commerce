import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';

import {AuthContextProvider} from "./context/authContext"





function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>

          <Routes/>
        </Switch>
      </AuthContextProvider>
    </Router>
  )
}


export default App

