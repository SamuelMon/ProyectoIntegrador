import React from "react";
import Jugador from "./Jugador";
import '../styles/integrantes.css';

function IntegrantesEquipo(props){
    const nombreEquipoStr =props.nombreEquipo.substring(0,3);
    return(
        <section className='contenedor sombra'>
            <form className='formulario'>
                <legend className="formulario__titulo">{nombreEquipoStr}</legend>
                <label>N°</label>
                <label>Nombre</label>
                <div className="contenedor__equipo">
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador/>
                    <Jugador
                    nombre = 'Jugador Libero'
                    label = {true} 
                    placeholder ='Libero' />
                    <Jugador 
                    placeholder ='Libero' />
                </div>
            </form>
        </section>
    )
};

export default IntegrantesEquipo;