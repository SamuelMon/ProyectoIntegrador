import React from "react";
import AccionesEquipo from "./AccionesEquipo";
import '../styles/vistaPrincipal.css'

function VistaPrincipal(){

    return(
        <div className="contenedorVistaP">
            <AccionesEquipo
            lado = 'izquierda' />
            <div className="sets">
                <p className="contenedor sombra">0-0</p>
            </div>
            <AccionesEquipo
            lado = 'derecha' />
        </div>
    );
};

export default VistaPrincipal;