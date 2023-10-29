import React from "react";
import Campo from "./Campo";
import OpcionMultiple from "./OpcionMultiple";
import '../styles/posicionInicial.css';

function PosicionInicial(props){
    const {nombreEquipo,eq} = props;
    const aux = `${nombreEquipo}`;
    const nombreEquipoStr =aux.substring(0,3);
    return(
        <div className="contenedor sombra">
            <form className="formulario formularioPosIn">
                <fieldset>
                    <legend className='formulario__titulo'>{nombreEquipoStr}</legend>
                    <div className="posicionesIniciales">
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='4'
                        id ={'4' + eq} />
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='3'
                        id ={'3' + eq} />
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='2'
                        id ={'2' + eq} />
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='5'
                        id ={'5' + eq} />
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='6'
                        id ={'6' + eq} />
                        <Campo 
                        clase ='formulario__input posicionInicial'
                        type ='number'
                        placeholder ='1'
                        id ={'1' + eq} />
                    </div>
                    <div className="contAuxPos">
                        <OpcionMultiple
                        clase ='formulario__input accionIn'
                        nombreCampo ='Accion inicial'
                        opcion1 ='Servicio' 
                        opcion2 ='Recepcion' 
                        id ='' />
                        <input className="boton botonPosIn" type="submit" value="Registrar" />
                        
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default PosicionInicial;