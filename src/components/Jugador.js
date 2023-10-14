import React from "react";
import Campo from "./Campo";
import '../styles/jugador.css';

function Jugador(props){
    const {numJ,eq}= props;
    const idNumAux= 'numJ';
    const idJugAux= 'nombJ';
    return(
        <div className="contenedorJugador">
            <Campo 
            nombreCampo={props.nombre}
            placeholder = 'N°'
            clase ='formulario__input'
            type ='number'         
            mostrarLabel = {props.label}
            id= {idNumAux + numJ + eq} />
            <Campo 
            clase ='formulario__input'
            type ='text'
            placeholder ={props.placeholder || 'Jugador'}
            mostrarLabel = {false}
            id = {idJugAux + numJ + eq} />
        </div>
    )
};

export default Jugador;