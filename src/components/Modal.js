import React from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const funcionAux = (event) => {
    event.stopPropagation();
  };
  return (
    isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={funcionAux}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
