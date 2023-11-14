import React from "react";
import PosicionesMain from "./PosicionesMain";
import PTS from "./PTS";
import '../styles/accionesEquipo.css';

function AccionesEquipo(props){
    const {lado,nombreequipo='Provisional'}=props;
    return(
        <div className="contenedorAccEq">
            <h2>{nombreequipo}</h2>
            <div className="contenedor sombra">
                <PTS
                lado = {lado} />
            </div>
            <div className="contenedor sombra">
                <PosicionesMain/>
            </div>
        </div>
    );
};

export default AccionesEquipo;