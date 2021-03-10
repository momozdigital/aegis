import React, { Component } from 'react';
import './crear.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

class CrearPostulante extends Component {

    state = {
        loading: false,
        name: '',
        receiptId: 0,
        price1: 0,
        price2: 0
      }  
    
      handleChange = ({ target: { value, name }}) => this.setState({ [name]: value})
    
      createAndDownloadPdf = () => {
        // console.log(this.state.loading);
        this.setState({ ...this.state, loading: true }, () => {
          // console.log(this.state.loading);
          axios.post('/create-pdf', this.state)
          .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
          
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
            this.setState({ loading : false });
            // console.log(this.state.loading);
          })
          axios.post('/create-pdf2', this.state)
          .then(() => axios.get('fetch-pdf2', { responseType: 'blob' }))
          .then((res) => {
          
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf2.pdf');
            this.setState({ loading : false });
            // console.log(this.state.loading);
          })
        });
        
        
      }

    render() {

        const { loading } = this.state;

        return ( 
            <form id="create-customer">
                <div className="fakeApp">
                    <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
                    <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
                    <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
                    <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
                    <button className="button" onClick={this.createAndDownloadPdf} disabled={loading}>
                    { loading && <i className="fas fa-spinner fa-pulse" aria-hidden="true"></i> }
                    { loading ? <span>Preparando PDF</span> : <span>Descargar PDF</span> }         
                    </button>
                </div>
                <section className="inner-container1">
                    <h2>Postulante</h2> 
                    <div className="inner-section">
                                          
                            <input className="input1" type="text" name="nombre" placeholder="Nombre"/>
                            <input className="input1" type="text"name="apellidopaterno" placeholder="Apellido Paterno"/>
                            <input className="input1" type="text" name="apellidomaterno" placeholder="Apellido Materno"/>
                            <input className="input2" type="text" name="rut" placeholder="RUT"/>
                            <input className="input2" type="text" name="fechadenac" placeholder="Fecha de Nac."/>
                            <input className="input2" type="text" name="estadocivil" placeholder="Estado Civil"/>
                            <input className="input2" type="text" name="comuna" placeholder="Comuna"/>
                            <input className="input1" type="text" name="provincia" placeholder="Provincia"/>
                            <input className="input1" type="email" name="email" placeholder="E-mail"/>
                            <input className="input1" type="text" name="fonocontacto" placeholder="Fono Contacto"/>                    
                    </div>
                    <h2>Conyugue</h2> 
                    <div className="inner-section">
                                           
                            <input className="input1" type="text" name="nombre" placeholder="Nombre"/>
                            <input className="input1" type="text"name="apellidopaterno" placeholder="Apellido Paterno"/>
                            <input className="input1" type="text" name="apellidomaterno" placeholder="Apellido Materno"/>
                            <input className="input2" type="text" name="rut" placeholder="RUT"/>
                            <input className="input2" type="text" name="fechadenac" placeholder="Fecha de Nac."/>
                            <input className="input2" type="text" name="estadocivil" placeholder="Estado Civil"/>
                            <input className="input2" type="text" name="comuna" placeholder="Comuna"/>
                            <input className="input1" type="text" name="provincia" placeholder="Provincia"/>
                            <input className="input1" type="email" name="email" placeholder="E-mail"/>
                            <input className="input1" type="text" name="fonocontacto" placeholder="Fono Contacto"/>                    
                    </div>
                </section>
                <section className="inner-container1">
                    <h2>Datos Comunes</h2>
                    <div className="inner-section datos-comunes">                    
                            <input className="input1" type="text" name="rol" placeholder="Rol"/>
                            <input className="input1" type="text" name="tipodevivienda" placeholder="Tipo de vivienda"/>
                            <input className="input1" type="text" name="domicilio" placeholder="Domicilio"/>
                            <input className="input1" type="text" name="materialidad" placeholder="Materialidad Predominante"/>
                            <input className="input1" type="text" name="numerofinal" placeholder="Numero Final"/>
                            <input className="input1" type="text" name="comunafinal" placeholder="Comuna Final"/>
                            <input className="input1" type="text" name="poblacionfinal" placeholder="Poblacion Final"/>
                            <input className="input1" type="text" name="provinciafinal" placeholder="Provincia Final"/>
                            <input className="input1" type="text" name="ocupantes" placeholder="Ocupantes de la Viv."/>  
                        
                    </div>
                    <div></div>
                </section>
                <section className="inner-container imprimir-crear">
                    <h2>Obersvaciones</h2>
                    <div className="observaciones">
                        <textarea name="observaciones" id="" placeholder="Observaciones"></textarea>
                        <div className="botones">
                            <input type="button" value="Guardar"/>
                            <input type="button" value="Borrar"/>
                            <input type="button" value="Imprimir"/>
                        </div>
                    </div>
                    <div>
    
                    </div>
                </section>
            </form>
        );
    }
    
}
 
export default CrearPostulante;