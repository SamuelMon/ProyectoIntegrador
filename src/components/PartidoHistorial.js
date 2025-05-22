import React from "react";
import "../styles/partidohistorial.css";

function PartidoHistorial({ idpartido, nombreEquipoA, nombreEquipoB, fecha, openModal, pedirInfo }) {
  const onClick = () => {
    pedirInfo(idpartido);
    openModal();
  };

  return (
    <div className="sombra contenedorPartidoHistorial" onClick={onClick}>
      <p className="pHistorial">{`${nombreEquipoA} VS ${nombreEquipoB}`}</p>
      <p className="pHistorial">{`${fecha}`}</p>
    </div>
  );
}

export default PartidoHistorial;
