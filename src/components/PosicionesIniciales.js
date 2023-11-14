import React from "react";
import PosicionInicial from "./PosicionInicial";
import '../styles/posicionesIniciales.css'

function PosicionesIniciales(){
    return(
        <div className="contenedorPosiciones">
            <PosicionInicial 
            eq='A' />
            <PosicionInicial 
            eq='B' />
        </div>
    )
}

export default PosicionesIniciales;