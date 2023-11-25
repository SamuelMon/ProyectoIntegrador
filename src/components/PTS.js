import React, { useState } from "react";
import Countdown from "./Countdown";
import Modal from "./Modal";
import "../styles/pts.css";

function PTS(props) {
  const { lado, aumentarPuntos, puntos } = props;
  const clasePuntoBtnAux = `${lado}`;
  const clasebase = "boton puntoBtn lbtn";
  const claseContTiempAux = "contenedorTiempos contenedorTiempos";
  const claseContNumTiempAux = "contenedorTiemposVista contenedorTiempos";
  const clasePuntoBtn = `${clasebase}${clasePuntoBtnAux}`;
  const claseContTiemp = `${claseContTiempAux}${clasePuntoBtnAux}`;
  const claseContNumTiemp = `${claseContNumTiempAux}${clasePuntoBtnAux}`;
  const nombJ = "a";
  const numJ = "15";

  const [startCountdown, setStartCountdown] = useState(false);
  const handleStartCountdownClick = () => {
    setStartCountdown(true);

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

  const closeModalDemora = () => {
    setModalDemoraOpen(false);
  };
  const [isModalCondOpen, setModalCondOpen] = useState(false);
  const openModalCond = () => {
    setModalCondOpen(true);
  };

  const closeModalCond = () => {
    setModalCondOpen(false);
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
      <div className={clasePuntoBtn} onClick={aumentarPuntos}>
        <p>{puntos}</p>
      </div>
      <div className={claseContTiemp}>
        <button
          className={`boton tiempoBtn ${
            buttonDisabled ? "disabled-button" : "tiempoHover"
          }`}
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
          {showDiv1 && <div className="tiemposVista"></div>}
          {showDiv2 && <div className="tiemposVista"></div>}
        </div>
      </div>
      <div className="contadorTiempo">
        {startCountdown && (
          <Countdown isActive={true} onCountdownEnd={handleCountdownEnd} />
        )}
      </div>
      <div className="boton sancionBtn" onClick={openModalTypeS}>
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
          <button
            className="boton botonSancion fontSancion amonestacion"
            onClick={closeModalDemora}
          >
            A
          </button>
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
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
          {nombJ === "" ? (
            ""
          ) : (
            <button
              className="boton botonSancion fontSancion jugadorSan"
              onClick={closeJugadoresOpenCond}
            >
              {numJ}
            </button>
          )}
        </div>
      </Modal>
      <Modal isOpen={isModalCondOpen} closeModal={closeModalCond}>
        <div className="grid grid4Column">
          <button
            className="boton botonSancion fontSancion amonestacion"
            onClick={closeModalCond}
          >
            A
          </button>
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
