import React from "react";
import IntegrantesEquipo from "./IntegrantesEquipo";
import { useNavigate } from "react-router-dom";
import "../styles/registroEquipos.css";

function RegitroEquipos() {
  const navigate = useNavigate();

  const redirectToNextPage = () => {
    // traer info del localstorage
    const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
    const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

    const { jugadores: jugadores1, ladoInicial: ladoInicial1 } = equipo1;
    const { jugadores: jugadores2, ladoInicial: ladoInicial2 } = equipo2;

    let minimoJugadores1 =
      Object.values(jugadores1).filter((nombre) => nombre !== "").length >= 6;
    let minimoJugadores2 =
      Object.values(jugadores2).filter((nombre) => nombre !== "").length >= 6;

    if (!minimoJugadores1) {
      alert("Faltan jugadores para el equipo1");
    }
    if (!minimoJugadores2) {
      alert("Faltan jugadores para el equipo2");
      return;
    }
    //Verificar que existe un lado asignado para cada equipo

    if (!ladoInicial1) {
      alert("Faltan ladoInicial para el equipo1");
    }
    if (!ladoInicial2) {
      alert("Faltan ladoInicial para el equipo2");
      return;
    }
    //Verificar que no sean iguales
    if (ladoInicial1 === ladoInicial2) {
      alert(
        "Ambos tienen los mismos lados, porfavor colocar un lado diferente a cada equipo"
      );
      return;
    }

    // SI esta completa  navigate("/pos")
    navigate("/pos");
  };
  return (
    <div className="contenedorRegistro">
      <IntegrantesEquipo numEq="eq1" />
      <IntegrantesEquipo numEq="eq2" />

      <div>
        <button className="boton" onClick={redirectToNextPage}>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default RegitroEquipos;
