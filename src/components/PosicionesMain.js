import React, { useState } from "react";
import Modal from "./Modal";
import OpcionesSustitucion from "./OpcionesSustitucion";
import "../styles/posicionesMain.css";

const POSICION_MAPPER = [
  { row: 2, col: 3 },
  { row: 1, col: 3 },
  { row: 1, col: 2 },
  { row: 1, col: 1 },
  { row: 2, col: 1 },
  { row: 2, col: 2 },
];

function PosicionesMain(props) {
  const { posiciones, lado } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="contenedorPosMain">
      {posiciones.map((posicion, index) => (
        <button
          onClick={openModal}
          key={posicion + lado}
          className="boton botonPos"
          style={{
            gridColumn: POSICION_MAPPER[index].col,
            gridRow: POSICION_MAPPER[index].row,
          }}
        >
          {posicion}
        </button>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <OpcionesSustitucion closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default PosicionesMain;
