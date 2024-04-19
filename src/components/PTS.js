import React, { useContext, useEffect, useState } from "react";
import Countdown from "./Countdown";
import Modal from "./Modal";
import "../styles/pts.css";
import { setsContext } from "../context/setsContext";
import { sancionesContext } from "../context/sancionesContext";

function PTS(props) {
  const {
    lado,
    numeros,
    nombres,
    aumentarPuntosA,
    aumentarPuntosB,
    eq,
    puntosEquipoA,
    puntosEquipoB,
    saca,
    sumarTiempo,
  } = props;
  const { set } = useContext(setsContext);
  const {
    sancionesJA,
    setSancionesJA,
    sancionesJB,
    setSancionesJB,
    setSancionesPersistA,
    sancionesPersistA,
    setSancionesPersistB,
    sancionesPersistB,
    log,
  } = useContext(sancionesContext);
  const [jugadorSancionado, setJugadorSancionado] = useState(0);
  const clasePuntoBtnAux = `${lado}`;
  const clasebase = "boton puntoBtn lbtn";
  const claseContTiempAux = "contenedorTiempos contenedorTiempos";
  const claseContNumTiempAux = "contenedorTiemposVista contenedorTiempos";
  const clasePuntoBtn = `${clasebase}${clasePuntoBtnAux}`;
  const claseContTiemp = `${claseContTiempAux}${clasePuntoBtnAux}`;
  const claseContNumTiemp = `${claseContNumTiempAux}${clasePuntoBtnAux}`;
  const auxIz = lado === "izquierda" && (set === 1 || set === 3) ? " rojo" : "";
  const auxDer = lado === "derecha" && set === 2 ? " rojo" : "";
  let thisAumentarPuntos;
  let thisPuntos;
  let puntosContrincante;

  if (eq === "A") {
    thisAumentarPuntos = aumentarPuntosA;
  } else {
    thisAumentarPuntos = aumentarPuntosB;
  }

  if (eq === "A") {
    thisPuntos = puntosEquipoA;
    puntosContrincante = puntosEquipoB;
  } else {
    thisPuntos = puntosEquipoB;
    puntosContrincante = puntosEquipoA;
  }

  const [
    numJ1,
    numJ2,
    numJ3,
    numJ4,
    numJ5,
    numJ6,
    numJ7,
    numJ8,
    numJ9,
    numJ10,
    numJ11,
    numJ12,
    numJ13,
    numJ14,
  ] = numeros;
  const [
    nombJ1 = "",
    nombJ2 = "",
    nombJ3 = "",
    nombJ4 = "",
    nombJ5 = "",
    nombJ6 = "",
    nombJ7 = "",
    nombJ8 = "",
    nombJ9 = "",
    nombJ10 = "",
    nombJ11 = "",
    nombJ12 = "",
    nombJ13 = "",
    nombJ14 = "",
  ] = nombres;

  const [startCountdown, setStartCountdown] = useState(false);
  const handleStartCountdownClick = () => {
    setStartCountdown(true);
    sumarTiempo();

    if (showDiv1) {
      setShowDiv1(false);
    } else if (showDiv2) {
      setShowDiv2(false);
      setButtonDisabled(true);
    }
  };
  const handleCountdownEnd = () => {
    // La cuenta regresiva ha finalizado, restablece el estado para permitir iniciarla de nuevo.
    setStartCountdown(false);
  };

  const [isModalTypeSOpen, setModalTypeSOpen] = useState(false);
  const openModalTypeS = () => {
    setModalTypeSOpen(true);
  };

  const closeModalTypeS = () => {
    setModalTypeSOpen(false);
  };

  const [isModalDemoraOpen, setModalDemoraOpen] = useState(false);
  const openModalDemora = () => {
    setModalDemoraOpen(true);
  };

  const [AmonestacionDemoraAble, setAmonestacionDemoraAble] = useState(true);
  const closeModalDemora = () => {
    setModalDemoraOpen(false);
  };
  const closeModalDemoraAyC = (valorSancion) => {
    setModalDemoraOpen(false);

    if (AmonestacionDemoraAble) {
      setAmonestacionDemoraAble(false);
    }
    if (valorSancion === 2) {
      if (eq === "A") {
        aumentarPuntosB();
      } else {
        aumentarPuntosA();
      }
    }
  };
  const [isModalCondOpen, setModalCondOpen] = useState(false);
  const [claseGridCond, setClasegridCond] = useState("grid4Column");
  const [amonestacionAble, setAmonestacionAble] = useState(true);
  const [castigoAble, setCastigoAble] = useState(true);
  const [expulsionAble, setExpulsionAble] = useState(true);
  const openModalCond = (num) => {
    if (eq === "A") {
      if (sancionesJA[num] === 2) {
        setCastigoAble(false);
        setClasegridCond("grid2Column");
      } else if (sancionesJA[num] === 3) {
        setCastigoAble(false);
        setExpulsionAble(false);
        setClasegridCond("");
      }
    } else {
      if (sancionesJB[num] === 2) {
        setCastigoAble(false);
        setClasegridCond("grid2Column");
      } else if (sancionesJB[num] === 3) {
        setCastigoAble(false);
        setExpulsionAble(false);
        setClasegridCond("");
      }
    }
    setModalCondOpen(true);
  };

  const closeModalCond = () => {
    if (!amonestacionAble) {
      setClasegridCond("grid3Column");
    }
    setCastigoAble(true);
    setExpulsionAble(true);
    setModalCondOpen(false);
  };
  const closeModalSancion = (valorSancion) => {
    let nombreSancion = "";

    if (valorSancion === 1) {
      nombreSancion = "Amonestacion";
    } else if (valorSancion === 2) {
      nombreSancion = "Castigo";
    } else if (valorSancion === 3) {
      nombreSancion = "Expulsión";
    } else if (valorSancion === 4) {
      nombreSancion = "Descalificación";
    }

    if (amonestacionAble) {
      setAmonestacionAble(false);
      setClasegridCond("grid3Column");
    }

    if (eq === "A") {
      const sancionesAux = [...sancionesJA];
      sancionesAux[jugadorSancionado] = valorSancion;
      setSancionesJA(sancionesAux);

      const persistAux = [...sancionesPersistA];
      persistAux.push({
        tipoSancion: nombreSancion,
        jugadorSancionado: numeros[jugadorSancionado],
        equipoSancionado: "A",
        set: set,
        puntaje: `${thisPuntos}:${puntosContrincante}`,
      });

      setSancionesPersistA(persistAux);
    } else {
      const sancionesAux = [...sancionesJB];
      sancionesAux[jugadorSancionado] = valorSancion;
      setSancionesJB(sancionesAux);

      const persistAux = [...sancionesPersistB];
      persistAux.push({
        tipoSancion: nombreSancion,
        jugadorSancionado: numeros[jugadorSancionado],
        equipoSancionado: "B",
        set: set,
        puntaje: `${thisPuntos}:${puntosContrincante}`,
      });

      setSancionesPersistB(persistAux);
    }

    if (valorSancion === 2) {
      if (eq === "A") {
        aumentarPuntosB();
      } else {
        aumentarPuntosA();
      }
    }
    closeModalCond();
  };

  const [thisSanciones, setThisSanciones] = useState([]);
  useEffect(() => {
    log();
    if (eq === "A") {
      setThisSanciones(sancionesJA);
    } else {
      setThisSanciones(sancionesJB);
    }
  }, [log, eq, sancionesJA, sancionesJB]);

  const [isModalJugadoresOpen, setModalJugadoresOpen] = useState(false);
  const openModalJugadores = () => {
    setModalJugadoresOpen(true);
  };

  const closeModalJugadores = () => {
    setModalJugadoresOpen(false);
  };

  const closeTypeOpenDemora = () => {
    closeModalTypeS();
    openModalDemora();
  };

  const closeTypeOpenJugadores = () => {
    closeModalTypeS();
    openModalJugadores();
  };

  const closeJugadoresOpenCond = (numeroJ) => {
    closeModalJugadores();
    setJugadorSancionado(numeroJ);
    openModalCond(numeroJ);
  };

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="contenedorPTS">
      <div
        className={`${clasePuntoBtn}${auxIz}${auxDer}`}
        onClick={thisAumentarPuntos}
      >
        <div className="contenedorEnPBtn">
          <p>{thisPuntos}</p>
          <div className="contenedorIconoBalon">
            {saca ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-ball-volleyball"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 12a8 8 0 0 0 8 4" />
                <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
                <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
                <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
                <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
                <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={claseContTiemp}>
        <button
          className={`boton tiempoBtn ${
            buttonDisabled ? "disabled-button" : "tiempoHover"
          } ${auxIz}${auxDer}`}
          onClick={handleStartCountdownClick}
          disabled={buttonDisabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-letter-t"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4l12 0" />
            <path d="M12 4l0 16" />
          </svg>
        </button>
        <div className={claseContNumTiemp}>
          {showDiv1 && <div className={`tiemposVista ${auxIz}${auxDer}`}></div>}
          {showDiv2 && <div className={`tiemposVista ${auxIz}${auxDer}`}></div>}
        </div>
      </div>
      <div
        className={`boton sancionBtn ${auxIz}${auxDer}`}
        onClick={openModalTypeS}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-cards"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
          <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
          <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
        </svg>
      </div>
      <Modal isOpen={startCountdown}>
        <Countdown isActive={true} onCountdownEnd={handleCountdownEnd} />
      </Modal>
      <Modal isOpen={isModalTypeSOpen} closeModal={closeModalTypeS}>
        <div className="grid grid2Column">
          <button
            className="boton botonSancion"
            onClick={closeTypeOpenJugadores}
          >
            Conductual
          </button>
          <button className="boton botonSancion" onClick={closeTypeOpenDemora}>
            Demora
          </button>
        </div>
      </Modal>
      <Modal isOpen={isModalDemoraOpen} closeModal={closeModalDemora}>
        <div className={`grid ${AmonestacionDemoraAble ? "grid2Column" : ""}`}>
          {AmonestacionDemoraAble && (
            <button
              className="boton botonSancion fontSancion amonestacion"
              onClick={() => closeModalDemoraAyC(1)}
            >
              A
            </button>
          )}
          <button
            className="boton botonSancion fontSancion castigo"
            onClick={() => closeModalDemoraAyC(2)}
          >
            C
          </button>
        </div>
      </Modal>
      <Modal isOpen={isModalJugadoresOpen} closeModal={closeModalJugadores}>
        <div className="grid grid4Column">
          {nombJ1 !== "" && thisSanciones[0] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(0)}
            >
              {numJ1}
            </button>
          )}
          {nombJ2 !== "" && thisSanciones[1] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(1)}
            >
              {numJ2}
            </button>
          )}
          {nombJ3 !== "" && thisSanciones[2] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(2)}
            >
              {numJ3}
            </button>
          )}
          {nombJ4 !== "" && thisSanciones[3] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(3)}
            >
              {numJ4}
            </button>
          )}
          {nombJ5 !== "" && thisSanciones[4] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(4)}
            >
              {numJ5}
            </button>
          )}
          {nombJ6 !== "" && thisSanciones[5] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(5)}
            >
              {numJ6}
            </button>
          )}
          {nombJ7 !== "" && thisSanciones[6] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(6)}
            >
              {numJ7}
            </button>
          )}
          {nombJ8 !== "" && thisSanciones[7] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(7)}
            >
              {numJ8}
            </button>
          )}
          {nombJ9 !== "" && thisSanciones[8] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(8)}
            >
              {numJ9}
            </button>
          )}
          {nombJ10 !== "" && thisSanciones[9] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(9)}
            >
              {numJ10}
            </button>
          )}
          {nombJ11 !== "" && thisSanciones[10] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(10)}
            >
              {numJ11}
            </button>
          )}
          {nombJ12 !== "" && thisSanciones[11] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(11)}
            >
              {numJ12}
            </button>
          )}
          {nombJ13 !== "" && thisSanciones[12] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(12)}
            >
              {numJ13}
            </button>
          )}
          {nombJ14 !== "" && thisSanciones[13] !== 4 && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={() => closeJugadoresOpenCond(13)}
            >
              {numJ14}
            </button>
          )}
        </div>
      </Modal>
      <Modal isOpen={isModalCondOpen} closeModal={closeModalCond}>
        <div className={`grid ${claseGridCond}`}>
          {amonestacionAble && (
            <button
              className="boton botonSancion fontSancion amonestacion"
              onClick={() => closeModalSancion(1)}
            >
              A
            </button>
          )}
          {castigoAble && (
            <button
              className="boton botonSancion fontSancion castigo"
              onClick={() => closeModalSancion(2)}
            >
              C
            </button>
          )}
          {expulsionAble && (
            <button
              className="boton botonSancion fontSancion desExp"
              onClick={() => closeModalSancion(3)}
            >
              E
            </button>
          )}
          <button
            className="boton botonSancion fontSancion desExp"
            onClick={() => closeModalSancion(4)}
          >
            D
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PTS;
