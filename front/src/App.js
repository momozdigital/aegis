import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { ToastContainer } from "react-toastify";

import './App.css';
import CrearPostulante from "./components/crear";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import SignUp from './components/signUp';
import Footer from "./layout/footer";
import Navbar from "./layout/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/crearPostulante">
            <CrearPostulante />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>      
        </Switch>
        <Footer />    
      </div>
    </Router>
  );
}

export default App;
