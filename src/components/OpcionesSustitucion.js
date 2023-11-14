import React from "react";
import '../styles/opcionesSustitucion.css'

function OpcionesSustitucion(props){
    const {closeModal}= props;
    return(
        <div className="contenedorSustitucion">
            <button className="boton botonSust" onClick={closeModal}></button>
            <button className="boton botonSust" onClick={closeModal}></button>
            <button className="boton botonSust" onClick={closeModal}></button>
            <button className="boton botonSust" onClick={closeModal}></button>
            <button className="boton botonSust" onClick={closeModal}></button>
            <button className="boton botonSust" onClick={closeModal}></button>
        </div>      
    );
};

export default OpcionesSustitucion;