import React from "react";
import IntegrantesEquipo from "./IntegrantesEquipo";
import '../styles/registroEquipos.css'

function RegitroEquipos(){
    return(
        <div className="contenedorRegistro">
            <IntegrantesEquipo
            numEq ='eq1' />
            <IntegrantesEquipo
            numEq ='eq2' />
        </div>
    );
};

export default RegitroEquipos;