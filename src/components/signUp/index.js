import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import icono_atras  from "../../assets/icono-atras-png-5.png";

class SignUp extends Component {
    render() {
        return (
            <div className="signup-outter-container">
            <Link to="/"><img src={icono_atras} alt="icono-atras"/></Link>    
            <div className="signup-container">
                <div className="intro-text">
                    <h2>AEGIS</h2>
                </div> 
                <div className="user-icon">
                    <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="usuario"/>
                </div>               
                <div className="inputs">                    
                    <div className="full-name">                            
                        <input type="text" placeholder="Nombre Completo"/>
                    </div>    
                    <div className="rut">                            
                        <input type="text" placeholder="RUT"/>
                    </div>
                    <div className="email">                            
                        <input type="text" placeholder="Correo Electronico"/>
                    </div>
                    <div className="username">                            
                        <input type="text" placeholder="Nombre de Usuario"/>
                    </div>
                    <div className="password">                            
                        <input type="text" placeholder="Contraseña"/>
                    </div>
                    <div className="btn-box">                        
                        <button>Registrarse</button>
                    </div>
                </div>                
            </div>            
        </div>
        )
    }
}

export default SignUp;