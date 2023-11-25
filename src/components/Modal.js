import React from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="boton close-button" onClick={closeModal}>
            Cerrar
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
