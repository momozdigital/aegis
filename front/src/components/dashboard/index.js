import React, { Component } from "react";
import jsPDF from 'jspdf';
import "./dashboard.css";



const jsPdfGenerator = (e) => {
    e.preventDefault();
    let text = document.getElementById('usuario').value;
    let keyword = document.getElementById('clave').value;   

    let doc = new jsPDF('p', 'pt');

    doc.text(50,50,text);
    doc.text(50,80,keyword);
    
    doc.save('output.pdf');
}    

class Dashboard extends Component {
    render() {
        return (
            <div className="outter-dashboard-container">
                <div className="dashboard-container">
                    <div className="intro-text">
                        <h2>AEGIS</h2>
                    </div> 
                                  
                    <form id="form" className="inputs">                    
                                                   
                        <input id="usuario" type="text" placeholder="Some Text"/>
                                                
                        <input id="clave" type="text" placeholder="Some other text"/>                        
                                            
                        <button onClick={jsPdfGenerator}>Generar PDF</button>
                        
                    </form> 
                                   
                </div>                
                
            </div>
            
        )
    }
}

export default Dashboard;
