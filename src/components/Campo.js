import React from "react";
import '../styles/campo.css'

function Campo(props){
    const {clase,type,placeholder,id} =props;
    const claseDiv =`${clase}`;
    const typeInput =`${type}`;
    const placeholderInput =`${placeholder}`;
    const idInput =`${id}`;
    return(
            <div className='campo'>
                {props.mostrarLabel && <label>{props.nombreCampo}</label>}
                <input id={idInput} className={claseDiv} type={typeInput} placeholder={placeholderInput} />
            </div>
    )
};

export default Campo;