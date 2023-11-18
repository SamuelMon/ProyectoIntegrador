import React from "react";
import PosicionInicial from "./PosicionInicial";
import "../styles/posicionesIniciales.css";
import { useNavigate } from "react-router-dom";

function PosicionesIniciales() {
  const navigate = useNavigate();
  const redirectToNextPage = () => {
    // traer info del localStorage
    const equipoA = JSON.parse(
      localStorage.getItem("RegistroEquipo-A")
    );
    const infoEq1 = JSON.parse(
      localStorage.getItem("InfoEquipo-eq1")
    );
    const equipoB = JSON.parse(
      localStorage.getItem("RegistroEquipo-B")
    );
    const infoEq2 = JSON.parse(
      localStorage.getItem("InfoEquipo-eq2")
    );

    const {
      numeros: numerosA,
      accion: accionA,
      numCamisetaJugadores1: numCamisetaJugadores1,
    } = equipoA;
    const {
      numeros: numerosB,
      accion: accionB,
      numCamisetaJugadores: numCamisetaJugadores2,
    } = equipoB;
    console.log(equipoA, equipoB)
    // Ver si está completa la info
    let minimoNumerosA =
      Object.values(numerosA).filter((numero) => numero != "").length >= 6;
    let minimoNumerosB =
      Object.values(numerosB).filter((numero) => numero != "").length >= 6;

    if (!minimoNumerosA) {
      alert("Faltan jugadores para el equipo A");
      return;
    }
    if (!minimoNumerosB) {
      alert("Faltan jugadores para el equipo B");
      return;
    }
    // Verificar que no se repitan los jugadores
    let numerosTotalesA = Object.values(numerosA).filter(
      (numero) => numero != ""
    );
    let numerosTotalesB = Object.values(numerosB).filter(
      (numero) => numero != ""
    );
    
    let numerosSinRepeticionA = new Set(numerosTotalesA);
    let numerosSinRepeticionB = new Set(numerosTotalesB);
    // Object.values(numerosA).includes(nuevoNumero)
    if (numerosTotalesA.length != numerosSinRepeticionA.size) {
      //Mira hay algun repetido revisar porfavor
      //alert
      alert(
        "Hay jugadores repetidos en las posiciones del equipo A, verifica que los jugadores ingresados sean diferentes"
      );
      return;
    }
    if (numerosTotalesB.length != numerosSinRepeticionB.size) {
      //Mira hay algun repetido revisar porfavor
      //alert
      alert(
        "Hay jugadores repetidos en las posiciones del equipo B , verifica que los jugadores ingresados sean diferentes"
      );
      return;
    }

    // Verificar que existe una acción asignada para cada equipo
    if (!accionA.accionA) {
      alert("Falta asignar una acción para el equipo A");
    }
    if (!accionB.accionB) {
      alert("Falta asignar una acción para el equipo B");
      // Verificar que las acciones no sean iguales
      return;
    }
    if (accionA.accionA === accionB.accionB) {
      alert(
        "Ambos tienen las mismas acciones, porfavor colocar una acción diferente a cada equipo"
      );
      return;
    }

    // Si está completa navigate("/main")
    navigate("/main")
  };

  return (
    <div className="contenedorPosiciones">
      <PosicionInicial eq="A" />
      <PosicionInicial eq="B" />

      <div>
        <button className="boton" onClick={redirectToNextPage}>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default PosicionesIniciales;
