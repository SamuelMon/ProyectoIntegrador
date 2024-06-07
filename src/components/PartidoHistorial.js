import React from "react";
import "../styles/partidohistorial.css";

function PartidoHistorial(props) {
  const {
    nombreEquipoA,
    nombreEquipoB,
    fecha,
    idPartido,
    openModal,
    pedirInfo,
  } = props;
  const onClick = () => { 
    openModal();
    pedirInfo(idPartido);
  };
  return (
    <div className=" sombra contenedorPartidoHistorial" onClick={onClick}>
      <p className="pHistorial">{`${nombreEquipoA} VS ${nombreEquipoB}`}</p>
      <p className="pHistorial">{`${fecha}`}</p>
    </div>
  );
}

export default PartidoHistorial;
