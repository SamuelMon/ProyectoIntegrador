import React from "react";
import "../styles/partidohistorial.css";

function PartidoHistorial(props) {
  const { nombreEquipoA, nombreEquipoB, fecha, idPartido, openModal } = props;
  return (
    <div className=" sombra contenedorPartidoHistorial" onClick={openModal}>
      <p className="pHistorial">{`${nombreEquipoA} VS ${nombreEquipoB}`}</p>
      <p className="pHistorial">{`${fecha}`}</p>
    </div>
  );
}

export default PartidoHistorial;
