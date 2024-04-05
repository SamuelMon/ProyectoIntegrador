import React, { useContext, useState } from "react";
import Countdown from "./Countdown";
import Modal from "./Modal";
import "../styles/pts.css";
import { setsContext } from "../context/setsContext";

function PTS(props) {
  const { set } = useContext(setsContext);
  const {
    lado,
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
    aumentarPuntos,
    puntos,
    saca,
    sumarTiempo,
  } = props;
  const clasePuntoBtnAux = `${lado}`;
  const clasebase = "boton puntoBtn lbtn";
  const claseContTiempAux = "contenedorTiempos contenedorTiempos";
  const claseContNumTiempAux = "contenedorTiemposVista contenedorTiempos";
  const clasePuntoBtn = `${clasebase}${clasePuntoBtnAux}`;
  const claseContTiemp = `${claseContTiempAux}${clasePuntoBtnAux}`;
  const claseContNumTiemp = `${claseContNumTiempAux}${clasePuntoBtnAux}`;
  const auxIz = lado === "izquierda" && (set === 1 || set === 3) ? " rojo" : "";
  const auxDer = lado === "derecha" && set === 2 ? " rojo" : "";

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
    if (AmonestacionDemoraAble) {
      setAmonestacionDemoraAble(false);
    }
  };
  const [isModalCondOpen, setModalCondOpen] = useState(false);
  const openModalCond = () => {
    setModalCondOpen(true);
  };

  const [AmonestacionAble, setAmonestacionAble] = useState(true);
  const closeModalCond = () => {
    setModalCondOpen(false);
    if (AmonestacionAble) {
      setAmonestacionAble(false);
    }
  };

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
  const closeJugadoresOpenCond = () => {
    closeModalJugadores();
    openModalCond();
  };

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="contenedorPTS">
      <div
        className={`${clasePuntoBtn}${auxIz}${auxDer}`}
        onClick={aumentarPuntos}
      >
        <div className="contenedorEnPBtn">
          <p>{puntos}</p>
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
      <div className="contadorTiempo">
        {startCountdown && (
          <Countdown isActive={true} onCountdownEnd={handleCountdownEnd} />
        )}
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
        <div className="grid grid2Column">
          {AmonestacionDemoraAble && (
            <button
              className="boton botonSancion fontSancion amonestacion"
              onClick={closeModalDemora}
            >
              A
            </button>
          )}
          <button
            className="boton botonSancion fontSancion castigo"
            onClick={closeModalDemora}
          >
            C
          </button>
        </div>
      </Modal>
      <Modal isOpen={isModalJugadoresOpen} closeModal={closeModalJugadores}>
        <div className="grid grid4Column">
          {nombJ1 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ1}
            </button>
          )}
          {nombJ2 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ2}
            </button>
          )}
          {nombJ3 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ3}
            </button>
          )}
          {nombJ4 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ4}
            </button>
          )}
          {nombJ5 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ5}
            </button>
          )}
          {nombJ6 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ6}
            </button>
          )}
          {nombJ7 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ7}
            </button>
          )}
          {nombJ8 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ8}
            </button>
          )}
          {nombJ9 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ9}
            </button>
          )}
          {nombJ10 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ10}
            </button>
          )}
          {nombJ11 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ11}
            </button>
          )}
          {nombJ12 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ12}
            </button>
          )}
          {nombJ13 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ13}
            </button>
          )}
          {nombJ14 !== "" && (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ14}
            </button>
          )}
        </div>
      </Modal>
      <Modal isOpen={isModalCondOpen} closeModal={closeModalCond}>
        <div className="grid grid4Column">
          {AmonestacionAble && (
            <button
              className="boton botonSancion fontSancion amonestacion"
              onClick={closeModalCond}
            >
              A
            </button>
          )}
          <button
            className="boton botonSancion fontSancion castigo"
            onClick={closeModalCond}
          >
            C
          </button>
          <button
            className="boton botonSancion fontSancion desExp"
            onClick={closeModalCond}
          >
            E
          </button>
          <button
            className="boton botonSancion fontSancion desExp"
            onClick={closeModalCond}
          >
            D
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PTS;
