import React from "react";
import '../styles/campo.css'

function Campo(props){
    const {clase,type,placeholder} =props;
    const claseDiv =`${clase}`;
    const typeInput =`${type}`;
    const placeholderInput =`${placeholder}`;
    return(
        <div className='campo'>
            {props.mostrarLabel && <label>{props.nombreCampo}</label>}
            <input className={claseDiv} type={typeInput} placeholder={placeholderInput} />
        </div>
    )
};

export default Campo;