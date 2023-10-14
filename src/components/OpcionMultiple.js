import React from "react";

function OpcionMultiple(props){
    const {clase,nombreCampo,id,onChange} =props;
    const claseSelect = `${clase}`;
    const nombreCampoProp = `${nombreCampo}`;
    const idInput =`${id}`;
    return(
        <div className='campo'>
            <label>{nombreCampoProp}</label>
            <select onChange={onChange} id={idInput} defaultValue={nombreCampoProp} className={claseSelect}>
                <option disabled>{nombreCampoProp}</option>
                <option>{props.opcion1}</option>
                <option>{props.opcion2}</option>
                <option>{props.opcion3}</option>
            </select>
        </div>
    )
};

export default OpcionMultiple;