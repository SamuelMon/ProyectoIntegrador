import { React, useEffect, useState } from "react";
import AccionesEquipo from "./AccionesEquipo";
import "../styles/vistaPrincipal.css";
import { useNavigate } from "react-router-dom";

function VistaPrincipal() {
  const navigate = useNavigate();
  const [equipoA, setEquipoA] = useState(undefined);
  const [equipoB, setEquipoB] = useState(undefined);
  const [nombreEquipoA, setNombreEquipoA] = useState("");
  const [nombreEquipoB, setNombreEquipoB] = useState("");
  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const [sacaA, setSacaA] = useState(false);
  const [sacaB, setSacaB] = useState(false);

  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

  const {
    jugadores: jugadores1,
    ladoInicial: ladoInicial1,
    numCamisetaJugadores: numJugadoresA,
  } = equipo1;
  const {
    jugadores: jugadores2,
    ladoInicial: ladoInicial2,
    numCamisetaJugadores: numJugadoresB,
  } = equipo2;

  //Arreglo jugadores EqA
  let arrJugadores1 = Object.values(jugadores1).filter((nombre) => nombre);
  //Arreglo números EqA
  let arrJugadores2 = Object.values(jugadores2).filter((nombre) => nombre);

  let arrNumJugadores1 = Object.values(numJugadoresA).filter(
    (numero) => numero
  );
  let arrNumJugadores2 = Object.values(numJugadoresB).filter(
    (numero) => numero
  );

  const [
    numJ1eqA,
    numJ2eqA,
    numJ3eqA,
    numJ4eqA,
    numJ5eqA,
    numJ6eqA,
    numJ7eqA,
    numJ8eqA,
    numJ9eqA,
    numJ10eqA,
    numJ11eqA,
    numJ12eqA,
    numJ13eqA,
    numJ14eqA,
  ] = arrNumJugadores1;
  const [
    nombJ1eqA,
    nombJ2eqA,
    nombJ3eqA,
    nombJ4eqA,
    nombJ5eqA,
    nombJ6eqA,
    nombJ7eqA,
    nombJ8eqA,
    nombJ9eqA,
    nombJ10eqA,
    nombJ11eqA,
    nombJ12eqA,
    nombJ13eqA,
    nombJ14eqA,
  ] = arrJugadores1;

  const [
    numJ1eqB,
    numJ2eqB,
    numJ3eqB,
    numJ4eqB,
    numJ5eqB,
    numJ6eqB,
    numJ7eqB,
    numJ8eqB,
    numJ9eqB,
    numJ10eqB,
    numJ11eqB,
    numJ12eqB,
    numJ13eqB,
    numJ14eqB,
  ] = arrNumJugadores2;
  const [
    nombJ1eqB,
    nombJ2eqB,
    nombJ3eqB,
    nombJ4eqB,
    nombJ5eqB,
    nombJ6eqB,
    nombJ7eqB,
    nombJ8eqB,
    nombJ9eqB,
    nombJ10eqB,
    nombJ11eqB,
    nombJ12eqB,
    nombJ13eqB,
    nombJ14eqB,
  ] = arrJugadores2;

  const [posA, setPosA] = useState([]);
  const [posB, setPosB] = useState([]);
  const aumentarPuntosEquipoA = () => {
    setPuntosEquipoA((prevPuntosA) => prevPuntosA + 1);
    if (sacaA === false) {
      rotarA();
      setSacaA(true);
      setSacaB(false);
    }
  };

  const aumentarPuntosEquipoB = () => {
    setPuntosEquipoB((prevPuntosB) => prevPuntosB + 1);
    if (sacaB === false) {
      rotarB();
      setSacaB(true);
      setSacaA(false);
    }
  };

  const verificarGanador = () => {
    if (puntosEquipoA >= 25 && puntosEquipoA - puntosEquipoB >= 2) {
      setSetsA(setsA + 1);
      navigate("/pos");
    } else if (puntosEquipoB >= 25 && puntosEquipoB - puntosEquipoA >= 2) {
      setSetsB(setsB + 1);
      navigate("/pos");
    }
  };

  useEffect(() => {
    verificarGanador();
  }, [puntosEquipoA, puntosEquipoA]);

  useEffect(() => {
    const numerosEqA = JSON.parse(localStorage.getItem("RegistroEquipo-A"));
    const numerosEqB = JSON.parse(localStorage.getItem("RegistroEquipo-B"));
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    setEquipoA(numerosEqA);
    setEquipoB(numerosEqB);

    const nombreEqA = nombreEquiposJson.equipo1;
    const nombreEqB = nombreEquiposJson.equipo2;
    const pos1eqA = numerosEqA?.numeros["1A"];
    const pos2eqA = numerosEqA?.numeros["2A"];
    const pos3eqA = numerosEqA?.numeros["3A"];
    const pos4eqA = numerosEqA?.numeros["4A"];
    const pos5eqA = numerosEqA?.numeros["5A"];
    const pos6eqA = numerosEqA?.numeros["6A"];
    const accionA = numerosEqA?.accion["accionA"];

    const pos1eqB = numerosEqB?.numeros["1B"];
    const pos2eqB = numerosEqB?.numeros["2B"];
    const pos3eqB = numerosEqB?.numeros["3B"];
    const pos4eqB = numerosEqB?.numeros["4B"];
    const pos5eqB = numerosEqB?.numeros["5B"];
    const pos6eqB = numerosEqB?.numeros["6B"];
    const accionB = numerosEqB?.accion["accionB"];

    if (accionA === "Servicio") {
      setSacaA(true);
    } else {
      setSacaB(true);
    }
    setNombreEquipoA(nombreEqA);
    setNombreEquipoB(nombreEqB);
    setPosA([pos1eqA, pos2eqA, pos3eqA, pos4eqA, pos5eqA, pos6eqA]);
    setPosB([pos1eqB, pos2eqB, pos3eqB, pos4eqB, pos5eqB, pos6eqB]);
  }, []);
  const rotarA = () => {
    setPosA((posicionesActualesA) => {
      const newPosA = posicionesActualesA.map((el) => el);
      const firstElementA = newPosA.shift(); // Quita el primer elemento
      newPosA.push(firstElementA);
      return newPosA;
    });
  };
  const rotarB = () => {
    setPosB((posicionesActualesB) => {
      const newPosB = posicionesActualesB.map((el) => el);
      const firstElementB = newPosB.shift(); // Quita el primer elemento
      newPosB.push(firstElementB);
      return newPosB;
    });
  };

  return (
    <div className="contenedorVistaP">
      <div className="izquierda">
        <AccionesEquipo
          lado="izquierda"
          nombreEquipo={nombreEquipoA}
          posiciones={posA}
          aumentarPuntos={aumentarPuntosEquipoA}
          puntos={puntosEquipoA}
          numJ1={numJ1eqA}
          numJ2={numJ2eqA}
          numJ3={numJ3eqA}
          numJ4={numJ4eqA}
          numJ5={numJ5eqA}
          numJ6={numJ6eqA}
          numJ7={numJ7eqA}
          numJ8={numJ8eqA}
          numJ9={numJ9eqA}
          numJ10={numJ10eqA}
          numJ11={numJ11eqA}
          numJ12={numJ12eqA}
          numJ13={numJ13eqA}
          numJ14={numJ14eqA}
          nombJ1={nombJ1eqA}
          nombJ2={nombJ2eqA}
          nombJ3={nombJ3eqA}
          nombJ4={nombJ4eqA}
          nombJ5={nombJ5eqA}
          nombJ6={nombJ6eqA}
          nombJ7={nombJ7eqA}
          nombJ8={nombJ8eqA}
          nombJ9={nombJ9eqA}
          nombJ10={nombJ10eqA}
          nombJ11={nombJ11eqA}
          nombJ12={nombJ12eqA}
          nombJ13={nombJ13eqA}
          nombJ14={nombJ14eqA}
          saca={sacaA}
        />
      </div>
      <div className="sets">
        <p className="contenedor sombra">{`${setsA}-${setsB}`}</p>
      </div>
      <div className="derecha">
        <AccionesEquipo
          lado="derecha"
          nombreEquipo={nombreEquipoB}
          posiciones={posB}
          aumentarPuntos={aumentarPuntosEquipoB}
          puntos={puntosEquipoB}
          numJ1={numJ1eqB}
          numJ2={numJ2eqB}
          numJ3={numJ3eqB}
          numJ4={numJ4eqB}
          numJ5={numJ5eqB}
          numJ6={numJ6eqB}
          numJ7={numJ7eqB}
          numJ8={numJ8eqB}
          numJ9={numJ9eqB}
          numJ10={numJ10eqB}
          numJ11={numJ11eqB}
          numJ12={numJ12eqB}
          numJ13={numJ13eqB}
          numJ14={numJ14eqB}
          nombJ1={nombJ1eqB}
          nombJ2={nombJ2eqB}
          nombJ3={nombJ3eqB}
          nombJ4={nombJ4eqB}
          nombJ5={nombJ5eqB}
          nombJ6={nombJ6eqB}
          nombJ7={nombJ7eqB}
          nombJ8={nombJ8eqB}
          nombJ9={nombJ9eqB}
          nombJ10={nombJ10eqB}
          nombJ11={nombJ11eqB}
          nombJ12={nombJ12eqB}
          nombJ13={nombJ13eqB}
          nombJ14={nombJ14eqB}
          saca={sacaB}
        />
      </div>
    </div>
  );
}

export default VistaPrincipal;
