import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/menuInicial.css";
import Modal from "./Modal";

function MenuInicial() {
  const navigate = useNavigate();

  const navigateTo = (num) => () => {
    if (num === 1) {
      navigate("/infogen");
    } else if (num === 2) {
      navigate("/historial");
    }
  };
  const [isModalInfoOpen, setModalInfoOpen] = useState(false);
  const openModalInfo = () => {
    setModalInfoOpen(true);
  };
  const closeModalInfo = () => {
    setModalInfoOpen(false);
  };

  return (
    <div className="contenedorMenuInicial">
      <button
        className="boton sombra btnMenuInicial btnNuevoPartido"
        onClick={navigateTo(1)}
      >
        Nuevo Partido
      </button>
      <h1 className="tituloPrincipal">
        SAKEJ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-ball-volleyball"
          onClick={openModalInfo}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-ripple"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
          <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
          <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
        </svg>
      </h1>
      <button
        className="boton sombra btnMenuInicial btnHistorialPartido"
        onClick={navigateTo(2)}
      >
        Historial de Partidos
      </button>
      <Modal isOpen={isModalInfoOpen} closeModal={closeModalInfo}>
        <h2>Planilla digital de voleibol</h2>
        <h2>Desarrollado por</h2>
        <p>Kevin Fernando Carmona Angel</p>
        <p>Joan Manuel Muñoz Monroy</p>
        <p>Samuel David Montoya Cano</p>
        <footer>Copyright 2024©</footer>
      </Modal>
    </div>
  );
}

export default MenuInicial;
