import React from "react";
import PosicionesMain from "./PosicionesMain";
import PTS from "./PTS";
import "../styles/accionesEquipo.css";

function AccionesEquipo(props) {
  const {
    posiciones,
    lado,
    numJ1,
    numJ2,
    numJ3,
    numJ4,
    numJ5,
    numJ6,
    numJ7,
    numJ8,
    numJ9,
    numJ10,
    numJ11,
    numJ12,
    numJ13,
    numJ14,
    nombJ1,
    nombJ2,
    nombJ3,
    nombJ4,
    nombJ5,
    nombJ6,
    nombJ7,
    nombJ8,
    nombJ9,
    nombJ10,
    nombJ11,
    nombJ12,
    nombJ13,
    nombJ14,
    nombreEquipo,
    aumentarPuntos,
    puntos,
    saca,
  } = props;
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.substring(0, 3);

  return (
    <div className="contenedorAccEq">
      <h2 className="uppercase">{nombreEquipoStr}</h2>
      <div className="contenedor sombra">
        <PTS
          lado={lado}
          aumentarPuntos={aumentarPuntos}
          puntos={puntos}
          numJ1={numJ1}
          numJ2={numJ2}
          numJ3={numJ3}
          numJ4={numJ4}
          numJ5={numJ5}
          numJ6={numJ6}
          numJ7={numJ7}
          numJ8={numJ8}
          numJ9={numJ9}
          numJ10={numJ10}
          numJ11={numJ11}
          numJ12={numJ12}
          numJ13={numJ13}
          numJ14={numJ14}
          nombJ1={nombJ1}
          nombJ2={nombJ2}
          nombJ3={nombJ3}
          nombJ4={nombJ4}
          nombJ5={nombJ5}
          nombJ6={nombJ6}
          nombJ7={nombJ7}
          nombJ8={nombJ8}
          nombJ9={nombJ9}
          nombJ10={nombJ10}
          nombJ11={nombJ11}
          nombJ12={nombJ12}
          nombJ13={nombJ13}
          nombJ14={nombJ14}
          saca={saca}
        />
      </div>
      <div className="contenedor sombra">
        <PosicionesMain posiciones={posiciones} />
      </div>
    </div>
  );
}

export default AccionesEquipo;
