import React from "react";
import Jugador from "./Jugador";
import '../styles/integrantes.css';

function IntegrantesEquipo(props){
    const nombreEquipo = props.nombreEquipo;
    const nombreEquipoStr =nombreEquipo.substring(0,3);
    return(
        <section className='contenedor sombra'>
            <form className='formulario'>
                <legend className="formulario__titulo">{nombreEquipoStr}</legend>
                <div className="contenedorLabel">
                    <label className="numeroLabel">N°</label>
                    <label>Nombre</label>
                </div>
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
                <input className="boton" type="submit"  value='Enviar' />
            </form>
        </section>
    )
};

export default IntegrantesEquipo;