import React, {useState} from "react";
import Modal from "./Modal";
import OpcionesSustitucion from "./OpcionesSustitucion";
import '../styles/posicionesMain.css'

function PosicionesMain(){
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    };
    return(
        <div className="contenedorPosMain">
            <button onClick={openModal} className="boton botonPos"></button>
            <button onClick={openModal} className="boton botonPos"></button>
            <button onClick={openModal} className="boton botonPos"></button>
            <button onClick={openModal} className="boton botonPos"></button>
            <button onClick={openModal} className="boton botonPos"></button>
            <button onClick={openModal} className="boton botonPos"></button>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <OpcionesSustitucion
                closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default PosicionesMain;