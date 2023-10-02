import React from "react";
import Campo from "./Campo";
import OpcionMultiple from "./OpcionMultiple";
import '../styles/infoGeneral.css'

function InfoGeneral(){
    return(
        <section className='contenedor sombra'>
            <form className="formulario">
                <fieldset>
                    <legend className='formulario__titulo'>Informacion General</legend>
                    <div className='formulario__contenedor'>
                        <Campo 
                        nombreCampo ='Nombre de competencia'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Competencia'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Ciudad'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Ciudad'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Escenario Deportivo'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Escenario'
                        mostrarLabel = {true} />
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Division'
                        opcion1 ='Masculina' 
                        opcion2 ='Femenina' 
                        opcion3 ='Mixta'
                        mostrarLabel = {true} />
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Categoria'
                        opcion1 ='Mayores' 
                        opcion2 ='Juvenil' 
                        opcion3 ='Menores'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Fecha'
                        clase ='formulario__input'
                        type ='date'
                        placeholder ='Fecha'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Hora'
                        clase ='formulario__input'
                        type ='time'
                        placeholder ='Hora'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Equipo 1'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} />
                        <Campo 
                        nombreCampo ='Equipo 2'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} />
                    </div>
                    <div>
                        <input className="boton" type="submit" value="Enviar" />
                    </div>
                </fieldset>
            </form>
        </section>
    )
};

export default InfoGeneral;