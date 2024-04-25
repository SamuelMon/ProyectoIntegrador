import { React, useEffect, useState, useContext } from "react";
import AccionesEquipo from "./AccionesEquipo";
import "../styles/vistaPrincipal.css";
import { useNavigate } from "react-router-dom";
import { setsContext } from "../context/setsContext";

function VistaPrincipal() {
  const navigate = useNavigate();
  const { set, setSet, setsA, setSetsA, setsB, setSetsB } =
    useContext(setsContext);
  const [equipoA, setEquipoA] = useState(undefined);
  const [equipoB, setEquipoB] = useState(undefined);
  const [nombreEquipoA, setNombreEquipoA] = useState("");
  const [nombreEquipoB, setNombreEquipoB] = useState("");
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const [tiemposEquipoA, setTiemposEquipoA] = useState(0);
  const [tiemposEquipoB, setTiemposEquipoB] = useState(0);
  const [sacaA, setSacaA] = useState(false);
  const [sacaB, setSacaB] = useState(false);
  const [equiposYGanador, setEquiposYGanador] = useState({
    equipoLadoA: "",
    equipoLadoB: "",
    equipoGanador: "",
  });
  const [setsGanadorPerdedor, setSetsGanadorPerdedor] = useState({
    setsGanador: 0,
    setsPerdedor: 0,
  });

  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

  const {
    jugadores: jugadores1,
    ladoInicial: ladoInicial1,
    numCamisetaJugadores: numJugadoresA,
  } = equipo1;
  const {
    jugadores: jugadores2,
    //ladoInicial: ladoInicial2,
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

  const arrNumJugadoresEquipoA =
    ladoInicial1 === "A" ? arrNumJugadores1 : arrNumJugadores2;
  const arrNumJugadoresEquipoB =
    ladoInicial1 === "A" ? arrNumJugadores2 : arrNumJugadores1;
  const arrNombJugadoresEquipoA =
    ladoInicial1 === "A" ? arrJugadores1 : arrNumJugadores2;
  const arrNombJugadoresEquipoB =
    ladoInicial1 === "A" ? arrJugadores2 : arrNumJugadores1;

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
      setSet(set + 1);
      navigate("/pos");
    } else if (puntosEquipoB >= 25 && puntosEquipoB - puntosEquipoA >= 2) {
      setSetsB(setsB + 1);
      setSet(set + 1);
      navigate("/pos");
    }
  };

  useEffect(() => {
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    const nombreEqA =
      ladoInicial1 === "A"
        ? nombreEquiposJson.equipo1
        : nombreEquiposJson.equipo2;
    const nombreEqB =
      ladoInicial1 === "A"
        ? nombreEquiposJson.equipo2
        : nombreEquiposJson.equipo1;

    setEquiposYGanador({
      equipoLadoA: nombreEqA,
      equipoLadoB: nombreEqB,
    });

    verificarGanador();

    if (setsA >= 2) {
      setEquiposYGanador((prevEquipos) => ({
        ...prevEquipos,
        equipoGanador: nombreEqA,
      }));
      setSetsGanadorPerdedor({
        setsGanador: setsA,
        setsPerdedor: setsB,
      });
    } else if (setsB >= 2) {
      setEquiposYGanador((prevEquipos) => ({
        ...prevEquipos,
        equipoGanador: nombreEqB,
      }));
      setSetsGanadorPerdedor({
        setsGanador: setsB,
        setsPerdedor: setsA,
      });
    }
    const infoSet = {
      tiemposEquipoA,
      tiemposEquipoB,
      puntosEquipoA,
      puntosEquipoB,
      setsA,
      setsB,
    };

    // Guarda la información según el set actual
    if (set === 1) {
      localStorage.setItem("infoPrimerSet", JSON.stringify(infoSet));
    } else if (set === 2) {
      localStorage.setItem("infoSegundoSet", JSON.stringify(infoSet));
    } else if (set === 3) {
      localStorage.setItem("infoTercerSet", JSON.stringify(infoSet));
    }
  }, [
    puntosEquipoA,
    puntosEquipoB,
    setsA,
    setsB,
    set,
    tiemposEquipoA,
    tiemposEquipoB,
  ]);

  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (equiposYGanador.equipoGanador && !hasNavigated) {
      localStorage.setItem("equipos", JSON.stringify(equiposYGanador));
      localStorage.setItem(
        "setsResultado",
        JSON.stringify(setsGanadorPerdedor)
      );
      setHasNavigated(true); // Evita el ciclo infinito
      navigate("/resumen");
    }
  }, [equiposYGanador, setsGanadorPerdedor, navigate, hasNavigated]);

  useEffect(() => {
    const numerosEqA = JSON.parse(localStorage.getItem("RegistroEquipo-A"));
    const numerosEqB = JSON.parse(localStorage.getItem("RegistroEquipo-B"));
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    setEquipoA(numerosEqA);
    setEquipoB(numerosEqB);

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

    if (set === 2) {
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

  const [infoSet1, setInfoSet1] = useState({
    tiemposEquipoASet1: tiemposEquipoA,
    tiemposEquipoBSet1: tiemposEquipoB,
    puntosEquipoASet1: puntosEquipoA,
    puntosEquipoBSet1: puntosEquipoB,
    setsASet1: setsA,
    setsBSet1: setsB,
  });
  const [infoSet2, setInfoSet2] = useState({
    tiemposEquipoASet2: tiemposEquipoA,
    tiemposEquipoBSet2: tiemposEquipoB,
    puntosEquipoASet2: puntosEquipoA,
    puntosEquipoBSet2: puntosEquipoB,
    setsASet2: setsA,
    setsBSet2: setsB,
  });
  const [infoSet3, setInfoSet3] = useState({
    tiemposEquipoASet3: tiemposEquipoA,
    tiemposEquipoBSet3: tiemposEquipoB,
    puntosEquipoASet3: puntosEquipoA,
    puntosEquipoBSet3: puntosEquipoB,
    setsASet3: setsA,
    setsBSet3: setsB,
  });

  return (
    <div className="contenedorVistaP">
      <div className={set === 1 || set === 3 ? "izquierda" : "derecha"}>
        <AccionesEquipo
          lado={set === 1 || set === 3 ? "izquierda" : "derecha"}
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
          {set === 1 || set === 3
            ? `${setsA} - ${setsB}`
            : `${setsB} - ${setsA}`}
        </p>
      </div>
      <div className={set === 1 || set === 3 ? "derecha" : "izquierda"}>
        <AccionesEquipo
          lado={set === 1 || set === 3 ? "derecha" : "izquierda"}
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
