import React from "react";
import PosicionesMain from "./PosicionesMain";
import PTS from "./PTS";
import "../styles/accionesEquipo.css";

function AccionesEquipo(props) {
  const {
    posiciones,
    lado,
    nombres,
    numeros,
    nombreEquipo,
    aumentarPuntosA,
    aumentarPuntosB,
    eq,
    puntosEquipoA,
    puntosEquipoB,
    saca,
  } = props;

  return (
    <div className="contenedorAccEq">
      <h2 className="uppercase">{nombreEquipo}</h2>
      <div className="contenedor sombra">
        <PTS
          lado={lado}
          aumentarPuntosA={aumentarPuntosA}
          aumentarPuntosB={aumentarPuntosB}
          eq={eq}
          puntosEquipoA={puntosEquipoA}
          puntosEquipoB={puntosEquipoB}
          nombres={nombres}
          numeros={numeros}
          saca={saca}
        />
      </div>
      <div className="contenedor sombra">
        <PosicionesMain
          posiciones={posiciones}
          nombres={nombres}
          numeros={numeros}
          aumentarPuntosA={aumentarPuntosA}
          aumentarPuntosB={aumentarPuntosB}
          lado={lado}
          eq={eq}
        />
      </div>
    </div>
  );
}

export default AccionesEquipo;
