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
                        mostrarLabel = {true} 
                        id ='nombreCompe'/>
                        <Campo 
                        nombreCampo ='Ciudad'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Ciudad'
                        mostrarLabel = {true} 
                        id ='ciudad'/>
                        <Campo 
                        nombreCampo ='Escenario Deportivo'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Escenario'
                        mostrarLabel = {true} 
                        id ='escenario'/>
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Division'
                        opcion1 ='Masculina' 
                        opcion2 ='Femenina' 
                        opcion3 ='Mixta'
                        mostrarLabel = {true} 
                        id ='division'/>
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Categoria'
                        opcion1 ='Mayores' 
                        opcion2 ='Juvenil' 
                        opcion3 ='Menores'
                        mostrarLabel = {true} 
                        id ='categoria'/>
                        <Campo 
                        nombreCampo ='Fecha'
                        clase ='formulario__input'
                        type ='date'
                        placeholder ='Fecha'
                        mostrarLabel = {true} 
                        id ='fecha'/>
                        <Campo 
                        nombreCampo ='Hora'
                        clase ='formulario__input'
                        type ='time'
                        placeholder ='Hora'
                        mostrarLabel = {true} 
                        id ='hora'/>
                        <Campo 
                        nombreCampo ='Equipo 1'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} 
                        id ='equipo1'/>
                        <Campo 
                        nombreCampo ='Equipo 2'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} 
                        id ='equipo2'/>
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