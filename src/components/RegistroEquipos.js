import React from "react";
import IntegrantesEquipo from "./IntegrantesEquipo";
import { useNavigate } from "react-router-dom";
import { backendAxios } from "../utils";
import "../styles/registroEquipos.css";

function RegitroEquipos() {
  const navigate = useNavigate();

  const redirectToNextPage = () => {
    // traer info del localstorage
    const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
    const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

    const { jugadores: jugadores1, ladoInicial: ladoInicial1 , numCamisetaJugadores: numerosJugadores1} = equipo1;
    const { jugadores: jugadores2, ladoInicial: ladoInicial2 , numCamisetaJugadores: numerosJugadores2} = equipo2;

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

    // Guardar la información de los jugadores, nombres y numeros
    const obtenerNombresJugadores = (jugadores, equipo) => {
      return Object.keys(jugadores)
        .filter((clave) => clave.startsWith(`nombJ`) && clave.endsWith(equipo))
        .map((clave) => jugadores[clave])
        .filter((nombre) => nombre !== "");
    };

    const nombresEquipo1 = obtenerNombresJugadores(jugadores1, "eq1");
    const nombresEquipo2 = obtenerNombresJugadores(jugadores2, "eq2");

    const obtenerNumerosJugadores = (numCamisetaJugadores, equipo) => {
      return Object.keys(numCamisetaJugadores)
        .filter((clave) => clave.startsWith(`numJ`) && clave.endsWith(equipo))
        .map((clave) => numCamisetaJugadores[clave])
        .filter((numero) => numero !== "");
    };

    const numerosEquipo1 = obtenerNumerosJugadores(numerosJugadores1, "eq1")
    const numerosEquipo2 = obtenerNumerosJugadores(numerosJugadores2, "eq2")

    const crearVariablesJugadores = (nombres, equipo) => {
      let variablesJugadores = {};
      for (let i = 0; i < nombres.length; i++) {
        variablesJugadores[`${equipo}Nom${i + 1}`] = nombres[i];
      }
      return variablesJugadores;
    };

    const variablesEquipo1 = crearVariablesJugadores(nombresEquipo1, "eq1");
    const variablesEquipo2 = crearVariablesJugadores(nombresEquipo2, "eq2");

    const crearVariablesNumerosJugadores = (numeros, equipo) => {
      let variablesNumerosJugadores = {};
      for (let i = 0; i < numeros.length; i++) {
        variablesNumerosJugadores[`${equipo}Num${i + 1}`] = numeros[i];
      }
      return variablesNumerosJugadores;
    };

    const variablesNumerosEquipo1 = crearVariablesNumerosJugadores(
      numerosEquipo1,
      "eq1"
    );

    const variablesNumerosEquipo2 = crearVariablesNumerosJugadores(
      numerosEquipo2,
      "eq2"
    );

    const datosJugadoresBack = {
      CantJugEq1: nombresEquipo1.length,
      CantJugEq2: nombresEquipo2.length,
      ...variablesEquipo1,
      ...variablesNumerosEquipo1,
      ...variablesEquipo2,
      ...variablesNumerosEquipo2,
    };

    console.log("datosJugadoresBack:", datosJugadoresBack);

    // Completar el endpoint para guardar en el back la info de jugadores

    backendAxios
      .post("http://<tu_direccion_ip_publica>:5000", datosJugadoresBack, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Equipo creado con éxito");
          // Realiza cualquier otra acción necesaria en el frontend
        } else {
          // Manejar otras respuestas de error aquí
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
        // Manejar el error de la petición aquí
      });
    
    alert("Información guardada de manera exitosa!");
    
    // SI esta completa toda la info navigate("/pos")
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
