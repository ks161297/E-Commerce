
import './App.css';
import Routes from "./Routes"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  )
}

export default App
