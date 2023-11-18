import React from "react";
import PosicionesMain from "./PosicionesMain";
import PTS from "./PTS";
import "../styles/accionesEquipo.css";

function AccionesEquipo(props) {
  const { pos1, pos2, pos3, pos4, pos5, pos6, lado, nombreEquipo } = props;
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.substring(0, 3);

  return (
    <div className="contenedorAccEq">
      <h2 className="uppercase">{nombreEquipoStr}</h2>
      <div className="contenedor sombra">
        <PTS lado={lado} />
      </div>
      <div className="contenedor sombra">
        <PosicionesMain
          pos1={pos1}
          pos2={pos2}
          pos3={pos3}
          pos4={pos4}
          pos5={pos5}
          pos6={pos6}
        />
      </div>
    </div>
  );
}

export default AccionesEquipo;
