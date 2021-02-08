import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="outter-container">
                <div className="container">
                    <div className="intro-text">
                        <h2>AEGIS</h2>
                    </div> 
                    <div className="user-icon">
                        <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="usuario"/>
                    </div>               
                    <div className="inputs">                    
                        <div className="username-input">                            
                            <input type="text" placeholder="Nombre de usuario"/>
                        </div>    
                        <div className="password-input">                            
                            <input type="text" placeholder="Contraseña"/>
                        </div>
                        <div className="btn-box">                        
                            <button>Iniciar Sesion</button>
                        </div>
                    </div>                
                </div>
                <div className="registro-div">
                    <p>¿No estas registrado?</p>
                    <div className="registrate">
                        <Link to="/signUp"><button>Crea una cuenta</button></Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;