import React from "react";
import "../styles/opcionesSustitucion.css";

function OpcionesSustitucion(props) {
  const { closeModal } = props;
  const numjSust = "10";
  const nombjSust = "";
  const nombjSust1 = "a";

  return (
    <div className="contenedorSustitucion">
      {nombjSust1 !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
      {nombjSust !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
      {nombjSust !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
      {nombjSust !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
      {nombjSust !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
      {nombjSust !== "" ? (
        <button className="boton botonSust" onClick={closeModal}>
          {numjSust}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default OpcionesSustitucion;
