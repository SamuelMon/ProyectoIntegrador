import { React, useState } from "react";

function OpcionMultiple(props) {
  const {
    clase,
    id,
    placeholder,
    onChange,
    nombreCampo = "",
    mostrarLabel,
    opcion1,
    opcion2,
    opcion3,
    opcion4,
    opcion5,
    opcion6,
    opcion7,
    opcion8,
    opcion9,
    opcion10,
    opcion11,
    opcion12,
    op1Able,
    op2Able,
    op3Able,
    op4Able,
    op5Able,
    op6Able,
    op7Able,
    op8Able,
    op9Able,
    op10Able,
    op11Able,
    op12Able,
  } = props;

  const claseSelect = `${clase}`;
  const nombreCampoProp = `${nombreCampo}`;
  const idInput = `${id}`;

  return (
    <div className="campo">
      {mostrarLabel && <label>{nombreCampo}</label>}
      <select
        onChange={onChange}
        id={idInput}
        defaultValue={nombreCampoProp}
        className={claseSelect}
        placeholder={placeholder}
      >
        <option disabled>{nombreCampoProp}</option>
        {op1Able && <option>{opcion1}</option>}
        {op2Able && <option>{opcion2}</option>}
        {op3Able && <option>{opcion3}</option>}
        {op4Able && <option>{opcion4}</option>}
        {op5Able && <option>{opcion5}</option>}
        {op6Able && <option>{opcion6}</option>}
        {op7Able && <option>{opcion7}</option>}
        {op8Able && <option>{opcion8}</option>}
        {op9Able && <option>{opcion9}</option>}
        {op10Able && <option>{opcion10}</option>}
        {op11Able && <option>{opcion11}</option>}
        {op12Able && <option>{opcion12}</option>}
      </select>
    </div>
  );
}

export default OpcionMultiple;
