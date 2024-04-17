import React from "react";
import "../styles/opcionesSustitucion.css";

function OpcionesSustitucion(props) {
  const { closeModal, numeros, nombres, posiciones } = props;

  const [
    numJ1,
    numJ2,
    numJ3,
    numJ4,
    numJ5,
    numJ6,
    numJ7,
    numJ8,
    numJ9,
    numJ10,
    numJ11,
    numJ12,
  ] = numeros;

  const [
    nombJ1 = "",
    nombJ2 = "",
    nombJ3 = "",
    nombJ4 = "",
    nombJ5 = "",
    nombJ6 = "",
    nombJ7 = "",
    nombJ8 = "",
    nombJ9 = "",
    nombJ10 = "",
    nombJ11 = "",
    nombJ12 = "",
  ] = nombres;

  const contarUnd = (array) => {
    let num = 0;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (typeof element === "undefined") {
        num++;
      }
    }
    return num;
  };

  const numJugadores = numeros.length - contarUnd(numeros);
  let claseDiv;

  if (numJugadores > 8) {
    claseDiv = "grid3Column";
  } else if (numJugadores === 8) {
    claseDiv = "grid2Column";
  } else {
    claseDiv = "";
  }

  return (
    <div className={`grid ${claseDiv}`}>
      {!posiciones.includes(numJ1) &&
        (nombJ1 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ1}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ2) &&
        (nombJ2 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ2}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ3) &&
        (nombJ3 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ3}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ4) &&
        (nombJ4 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ4}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ5) &&
        (nombJ5 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ5}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ6) &&
        (nombJ6 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ6}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ7) &&
        (nombJ7 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ7}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ8) &&
        (nombJ8 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ8}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ9) &&
        (nombJ9 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ9}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ10) &&
        (nombJ10 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ10}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ11) &&
        (nombJ11 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ11}
          </button>
        ) : (
          ""
        ))}
      {!posiciones.includes(numJ12) &&
        (nombJ12 !== "" ? (
          <button className="boton botonSust" onClick={closeModal}>
            {numJ12}
          </button>
        ) : (
          ""
        ))}
    </div>
  );
}

export default OpcionesSustitucion;
