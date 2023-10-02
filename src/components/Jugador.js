import React from "react";
import Campo from "./Campo";
import '../styles/jugador.css';

function Jugador(props){
    return(
        <div>
            <Campo 
            nombreCampo={props.nombre}
            placeholder = ' '
            clase ='formulario__input'
            type ='number'         
            mostrarLabel = {props.label} />
            <Campo 
            clase ='formulario__input'
            type ='text'
            placeholder ={props.placeholder || ' '}
            mostrarLabel = {false} />
        </div>
    )
};

export default Jugador;