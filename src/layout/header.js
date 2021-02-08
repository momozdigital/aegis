import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import userIcon from '../assets/icono-usuario.png'

const Navbar = () => {

  return (    
        <nav className="navbar">
          <Link className="my-logo" to="/">
            <h1>AEGIS</h1>
          </Link>          
          <div className="autenticacion">
            <Link className="ingresar" to="/dashboard">
                <h2>Ingresar</h2>
            </Link>
            <Link className="salir" to="/">
                <h2>Salir</h2>
            </Link>
            <img src={userIcon} alt="iniciales"/>  
          </div>          
        </nav>
      
  );
};

export default Navbar;