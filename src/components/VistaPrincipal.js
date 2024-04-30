import { React, useEffect, useState, useContext } from "react";
import AccionesEquipo from "./AccionesEquipo";
import "../styles/vistaPrincipal.css";
import { useNavigate } from "react-router-dom";
import { setsContext } from "../context/setsContext";

function VistaPrincipal() {
  const navigate = useNavigate();
  const {
    set,
    setSet,
    setsA,
    setSetsA,
    setsB,
    setSetsB,
    setPuntosASet1,
    setPuntosASet2,
    setPuntosASet3,
    setPuntosASet4,
    setPuntosASet5,
    setPuntosBSet1,
    setPuntosBSet2,
    setPuntosBSet3,
    setPuntosBSet4,
    setPuntosBSet5,
  } = useContext(setsContext);
  const [nombreEquipoA, setNombreEquipoA] = useState("");
  const [nombreEquipoB, setNombreEquipoB] = useState("");
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const [puntosParaGanar, setPuntosParaGanar] = useState();
  const [sacaA, setSacaA] = useState(false);
  const [sacaB, setSacaB] = useState(false);
  const [posA, setPosA] = useState([]);
  const [posB, setPosB] = useState([]);
  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));
  const [formato, setFormato] = useState("");

  useEffect(() => {
    const formatoJson = JSON.parse(localStorage.getItem("formatoSets"));
    setFormato(formatoJson.formato);
  }, []);

  useEffect(() => {
    if (formato === "2 de 3") {
      if (set > 2) {
        setPuntosParaGanar(15);
      } else {
        setPuntosParaGanar(25);
      }
    } else if (formato === "3 de 5") {
      if (set > 4) {
        setPuntosParaGanar(15);
      } else {
        setPuntosParaGanar(25);
      }
    }
  }, [set, formato]);

  const {
    jugadores: jugadores1,
    ladoInicial: ladoInicial1,
    numCamisetaJugadores: numJugadoresA,
  } = equipo1;
  const { jugadores: jugadores2, numCamisetaJugadores: numJugadoresB } =
    equipo2;

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

  const arrNumJugadoresEquipoA =
    ladoInicial1 === "A" ? arrNumJugadores1 : arrNumJugadores2;
  const arrNumJugadoresEquipoB =
    ladoInicial1 === "A" ? arrNumJugadores2 : arrNumJugadores1;
  const arrNombJugadoresEquipoA =
    ladoInicial1 === "A" ? arrJugadores1 : arrNumJugadores2;
  const arrNombJugadoresEquipoB =
    ladoInicial1 === "A" ? arrJugadores2 : arrNumJugadores1;

  const guardarPuntos = () => {
    if (set === 1) {
      setPuntosASet1(puntosEquipoA);
      setPuntosBSet1(puntosEquipoB);
    } else if (set === 2) {
      setPuntosASet2(puntosEquipoA);
      setPuntosBSet2(puntosEquipoB);
    } else if (set === 3) {
      setPuntosASet3(puntosEquipoA);
      setPuntosBSet3(puntosEquipoB);
    } else if (set === 4) {
      setPuntosASet4(puntosEquipoA);
      setPuntosBSet4(puntosEquipoB);
    } else if (set === 5) {
      setPuntosASet5(puntosEquipoA);
      setPuntosBSet5(puntosEquipoB);
    }
  };

  useEffect(() => {
    verificarFinSet();
  }, [puntosEquipoA, puntosEquipoB]);

  const verificarFinSet = () => {
    if (puntosEquipoA >= puntosParaGanar && puntosEquipoA - puntosEquipoB > 1) {
      let setsParaGanar = formato === "2 de 3" ? 2 : 3;
      if (setsA + 1 === setsParaGanar) {
        setSetsA((prevSetsA) => prevSetsA + 1);
        guardarPuntos();
        navigate("/resumen");
      } else {
        setSetsA((prevSetsA) => prevSetsA + 1);
        setSet((prevSet) => prevSet + 1);
        guardarPuntos();
        navigate("/pos");
      }
    } else if (
      puntosEquipoB >= puntosParaGanar &&
      puntosEquipoB - puntosEquipoA > 1
    ) {
      let setsParaGanar = formato === "2 de 3" ? 2 : 3;
      if (setsB + 1 === setsParaGanar) {
        setSetsB((prevSetsB) => prevSetsB + 1);
        guardarPuntos();
        navigate("/resumen");
      } else {
        setSetsB((prevSetsB) => prevSetsB + 1);
        setSet((prevSet) => prevSet + 1);
        guardarPuntos();
        navigate("/pos");
      }
    }
  };

  const aumentarPuntosEquipoA = () => {
    setPuntosEquipoA((prevPuntosA) => prevPuntosA + 1);
    if (sacaA === false) {
      rotarA();
      setSacaA(true);
      setSacaB(false);
    }
    verificarFinSet();
  };

  const aumentarPuntosEquipoB = () => {
    setPuntosEquipoB((prevPuntosB) => prevPuntosB + 1);
    if (sacaB === false) {
      rotarB();
      setSacaB(true);
      setSacaA(false);
    }
    verificarFinSet();
  };

  useEffect(() => {
    const numerosEqA = JSON.parse(localStorage.getItem("RegistroEquipo-A"));
    const numerosEqB = JSON.parse(localStorage.getItem("RegistroEquipo-B"));
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));

    const nombreEqA =
      ladoInicial1 === "A"
        ? nombreEquiposJson.equipo1
        : nombreEquiposJson.equipo2;
    const nombreEqB =
      ladoInicial1 === "A"
        ? nombreEquiposJson.equipo2
        : nombreEquiposJson.equipo1;
    const pos1eqA = numerosEqA?.numeros["1A"];
    const pos2eqA = numerosEqA?.numeros["2A"];
    const pos3eqA = numerosEqA?.numeros["3A"];
    const pos4eqA = numerosEqA?.numeros["4A"];
    const pos5eqA = numerosEqA?.numeros["5A"];
    const pos6eqA = numerosEqA?.numeros["6A"];
    let accionA = numerosEqA?.accion["accionA"];

    const pos1eqB = numerosEqB?.numeros["1B"];
    const pos2eqB = numerosEqB?.numeros["2B"];
    const pos3eqB = numerosEqB?.numeros["3B"];
    const pos4eqB = numerosEqB?.numeros["4B"];
    const pos5eqB = numerosEqB?.numeros["5B"];
    const pos6eqB = numerosEqB?.numeros["6B"];
    let accionB = numerosEqB?.accion["accionB"];

    if (set === 2 || set === 4) {
      let aux = accionA;
      accionA = accionB;
      accionB = aux;
    }

    if (accionA === "Servicio") {
      setSacaA(true);
    } else {
      setSacaB(true);
    }
    setNombreEquipoA(nombreEqA);
    setNombreEquipoB(nombreEqB);
    setPosA([pos1eqA, pos2eqA, pos3eqA, pos4eqA, pos5eqA, pos6eqA]);
    setPosB([pos1eqB, pos2eqB, pos3eqB, pos4eqB, pos5eqB, pos6eqB]);
  }, [ladoInicial1, set]);
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
      <div
        className={
          set === 1 || set === 3 || set === 5 ? "izquierda" : "derecha"
        }
      >
        <AccionesEquipo
          lado={set === 1 || set === 3 || set === 5 ? "izquierda" : "derecha"}
          nombreEquipo={nombreEquipoA}
          posiciones={posA}
          aumentarPuntosA={aumentarPuntosEquipoA}
          aumentarPuntosB={aumentarPuntosEquipoB}
          eq="A"
          puntosEquipoA={puntosEquipoA}
          puntosEquipoB={puntosEquipoB}
          nombres={arrNombJugadoresEquipoA}
          numeros={arrNumJugadoresEquipoA}
          saca={sacaA}
        />
      </div>
      <div className="sets">
        <p className="contenedor sombra">
          {set === 1 || set === 3 || set === 5
            ? `${setsA} - ${setsB}`
            : `${setsB} - ${setsA}`}
        </p>
      </div>
      <div
        className={
          set === 1 || set === 3 || set === 5 ? "derecha" : "izquierda"
        }
      >
        <AccionesEquipo
          lado={set === 1 || set === 3 || set === 5 ? "derecha" : "izquierda"}
          nombreEquipo={nombreEquipoB}
          posiciones={posB}
          aumentarPuntosB={aumentarPuntosEquipoB}
          aumentarPuntosA={aumentarPuntosEquipoA}
          eq="B"
          puntosEquipoB={puntosEquipoB}
          puntosEquipoA={puntosEquipoA}
          nombres={arrNombJugadoresEquipoB}
          numeros={arrNumJugadoresEquipoB}
          saca={sacaB}
        />
      </div>
    </div>
  );
}

export default VistaPrincipal;
