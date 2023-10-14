import React from "react";
import Jugador from "./Jugador";
import '../styles/integrantes.css';

function IntegrantesEquipo(props){
    const {nombreEquipo, numEq} = props;
    const aux = `${nombreEquipo}`;
    const nombreEquipoStr =aux.substring(0,3);
    return(
        <section className='contenedor sombra contenedor__equipos'>
            <form className='formulario'>
                <legend className="formulario__titulo">{nombreEquipoStr}</legend>
                <div className="contenedorLabel">
                    <label className="numeroLabel">N°</label>
                    <label>Nombre</label>
                </div>
                <div className="contenedor__equipo">
                    <Jugador
                    numJ = '1'
                    eq={numEq} />
                    <Jugador
                    numJ = '2'
                    eq={numEq} />
                    <Jugador
                    numJ = '3'
                    eq={numEq} />
                    <Jugador
                    numJ = '4'
                    eq={numEq} />
                    <Jugador
                    numJ = '5'
                    eq={numEq} />
                    <Jugador
                    numJ = '6'
                    eq={numEq} />
                    <Jugador
                    numJ = '7'
                    eq={numEq} />
                    <Jugador
                    numJ = '8'
                    eq={numEq} />
                    <Jugador
                    numJ = '9'
                    eq={numEq} />
                    <Jugador
                    numJ = '10'
                    eq={numEq} />
                    <Jugador
                    numJ = '11'
                    eq={numEq} />
                    <Jugador
                    numJ = '12'
                    eq={numEq} />
                    <Jugador
                    nombre = 'Jugador Libero'
                    label = {true} 
                    placeholder ='Libero'
                    numJ = '13'
                    eq={numEq} />
                    <Jugador 
                    placeholder ='Libero'
                    numJ = '14'
                    eq={numEq} />
                </div>
                <input className="boton" type="submit"  value='Enviar' />
            </form>
        </section>
    )
};

export default IntegrantesEquipo;