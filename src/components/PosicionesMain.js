import React, {useState} from "react";
import Modal from "./Modal";
import OpcionesSustitucion from "./OpcionesSustitucion";
import '../styles/posicionesMain.css'

function PosicionesMain(props){
    const {pos1,pos2,pos3,pos4,pos5,pos6}= props;
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
    };
    
    const closeModal = () => {
    setModalOpen(false);
    };
    return(
        <div className="contenedorPosMain">
            <button onClick={openModal} className="boton botonPos">{pos4}</button>
            <button onClick={openModal} className="boton botonPos">{pos3}</button>
            <button onClick={openModal} className="boton botonPos">{pos2}</button>
            <button onClick={openModal} className="boton botonPos">{pos5}</button>
            <button onClick={openModal} className="boton botonPos">{pos6}</button>
            <button onClick={openModal} className="boton botonPos">{pos1}</button>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <OpcionesSustitucion
                closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default PosicionesMain;