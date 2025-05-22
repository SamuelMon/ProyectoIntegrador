import React from "react";

function OpcionMultiple(props) {
  const {
    clase,
    id,
    placeholder,
    nombreCampo = "",
    mostrarLabel,
    opciones = [],
    opAble = [],
    onChange,
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
        <option className="optionDisabled" disabled>
          {nombreCampoProp}
        </option>
        {opciones.map(
          (opcion, index) =>
            opAble[index] && (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            )
        )}
      </select>
    </div>
  );
}

export default OpcionMultiple;
