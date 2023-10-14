import React, {useState} from "react";
import Campo from "./Campo";
import OpcionMultiple from "./OpcionMultiple";
import '../styles/infoGeneral.css'

function InfoGeneral(){
    const [datos, setDatos] = useState({
        nombreCompe: '',
        ciudad: '',
        escenario: '',
        division: '',
        categoria: '',
        fecha: '',
        hora: '',
        equipo1: '',
        equipo2: ''
    })

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setDatos({
            ...datos,
            [id]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se puede hacer lo que se quiera con los datos del formulario
        let Moncayo = JSON.stringify(datos);
        alert(Moncayo);
    }
    
    return(
        <section className='contenedor sombra'>
            <form className="formulario" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='formulario__titulo'>Informacion General</legend>
                    <div className='formulario__contenedor__infogen'>
                        <Campo 
                        nombreCampo ='Nombre de competencia'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Competencia'
                        mostrarLabel = {true} 
                        id ='nombreCompe'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Ciudad'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Ciudad'
                        mostrarLabel = {true} 
                        id ='ciudad'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Escenario Deportivo'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Escenario'
                        mostrarLabel = {true} 
                        id ='escenario'
                        onChange={handleInputChange} />
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Division'
                        opcion1 ='Masculina' 
                        opcion2 ='Femenina' 
                        opcion3 ='Mixta'
                        mostrarLabel = {true} 
                        id ='division'
                        onChange={handleInputChange} />
                        <OpcionMultiple
                        clase ='formulario__input'
                        nombreCampo ='Categoria'
                        opcion1 ='Mayores' 
                        opcion2 ='Juvenil' 
                        opcion3 ='Menores'
                        mostrarLabel = {true} 
                        id ='categoria'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Fecha'
                        clase ='formulario__input'
                        type ='date'
                        placeholder ='Fecha'
                        mostrarLabel = {true} 
                        id ='fecha'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Hora'
                        clase ='formulario__input'
                        type ='time'
                        placeholder ='Hora'
                        mostrarLabel = {true} 
                        id ='hora'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Equipo 1'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} 
                        id ='equipo1'
                        onChange={handleInputChange} />
                        <Campo 
                        nombreCampo ='Equipo 2'
                        clase ='formulario__input'
                        type ='text'
                        placeholder ='Equipo'
                        mostrarLabel = {true} 
                        id ='equipo2'
                        onChange={handleInputChange} />
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