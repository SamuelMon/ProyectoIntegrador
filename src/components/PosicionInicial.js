import React, { useState, useEffect, useContext } from "react";
import OpcionMultiple from "./OpcionMultiple";
import { setsContext } from "../context/setsContext";
import "../styles/posicionInicial.css";
import { sancionesContext } from "../context/sancionesContext";

function PosicionInicial(props) {
  const { set } = useContext(setsContext);
  const { eq } = props;
  const [nombreEquipo, setNombreEquipo] = useState("");
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.toUpperCase();
  const { sancionesJA, sancionesJB } = useContext(sancionesContext);
  const [formato, setFormato] = useState(0);
  const accionInicialAble =
    formato === "2 de 3" ? set === 1 || set === 3 : set === 1 || set === 5;

  let thisSanciones;

  if (eq === "A") {
    thisSanciones = sancionesJA;
  } else {
    thisSanciones = sancionesJB;
  }
  const [numeros, setNumeros] = useState({
    [`1${eq}`]: "",
    [`2${eq}`]: "",
    [`3${eq}`]: "",
    [`4${eq}`]: "",
    [`5${eq}`]: "",
    [`6${eq}`]: "",
  });

  const [accion, setAccion] = useState({
    [`accion${eq}`]: "",
  });
  // traer info del localstorage
  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

  const { ladoInicial: ladoInicial1, numCamisetaJugadores: numJugadoresA } =
    equipo1;
  const { numCamisetaJugadores: numJugadoresB } = equipo2;

  useEffect(() => {
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    const formatoJson = JSON.parse(localStorage.getItem("formatoSets"));

    const nombreEquipo =
      ladoInicial1 === eq
        ? nombreEquiposJson.equipo1
        : nombreEquiposJson.equipo2;
    setFormato(formatoJson.formato);
    setNombreEquipo(nombreEquipo);
  }, [eq, ladoInicial1]);

  let arrNumJugadores1 = Object.values(numJugadoresA).filter(
    (numero) => numero
  );
  let arrNumJugadores2 = Object.values(numJugadoresB).filter(
    (numero) => numero
  );

  const arrNumJugadores =
    ladoInicial1 === eq ? arrNumJugadores1 : arrNumJugadores2;

  const [
    numJ1 = "",
    numJ2 = "",
    numJ3 = "",
    numJ4 = "",
    numJ5 = "",
    numJ6 = "",
    numJ7 = "",
    numJ8 = "",
    numJ9 = "",
    numJ10 = "",
    numJ11 = "",
    numJ12 = "",
  ] = arrNumJugadores;

  const handleAccionChange = (event) => {
    const { id, value } = event.target;
    setAccion((prevAccion) => ({
      ...prevAccion,
      [id]: value,
    }));
  };

  const handleNumberChange = (event) => {
    const { id, value } = event.target;
    setNumeros((prevNumeros) => ({
      ...prevNumeros,
      [id]: value,
    }));
  };
  const Envio = async (event) => {
    event.preventDefault();
    //Aquí se puede hacer lo que se quiera con los datos

    // guardar información localStorage

    localStorage.setItem(
      [`RegistroEquipo-${eq}`],
      JSON.stringify({
        numeros,
        accion,
      })
    );
    if (eq === "A") {
      alert("Posiciones iniciales del equipo A registradas exitosamente!");
    } else {
      alert("Posiciones iniciales del equipo B registradas exitosamente!");
    }
  };

  return (
    <div className="contenedor sombra">
      <form className="formulario formularioPosIn" onSubmit={Envio}>
        <fieldset>
          <legend className="formulario__titulo tituloPosIni">
            {nombreEquipoStr}
          </legend>
          <div className="posicionesIniciales">
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"4" + eq}
              nombreCampo="IV"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"3" + eq}
              nombreCampo="III"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"2" + eq}
              nombreCampo="II"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"5" + eq}
              nombreCampo="V"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"6" + eq}
              nombreCampo="VI"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"1" + eq}
              nombreCampo="I"
              opciones={[
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
              ]}
              opAble={[
                numJ1 !== "" && thisSanciones[0] !== 4,
                numJ2 !== "" && thisSanciones[1] !== 4,
                numJ3 !== "" && thisSanciones[2] !== 4,
                numJ4 !== "" && thisSanciones[3] !== 4,
                numJ5 !== "" && thisSanciones[4] !== 4,
                numJ6 !== "" && thisSanciones[5] !== 4,
                numJ7 !== "" && thisSanciones[6] !== 4,
                numJ8 !== "" && thisSanciones[7] !== 4,
                numJ9 !== "" && thisSanciones[8] !== 4,
                numJ10 !== "" && thisSanciones[9] !== 4,
                numJ11 !== "" && thisSanciones[10] !== 4,
                numJ12 !== "" && thisSanciones[11] !== 4,
              ]}
              onChange={handleNumberChange}
            />
          </div>
          <div className="contAuxPos">
            {accionInicialAble && (
              <OpcionMultiple
                clase="formulario__input accionIn"
                nombreCampo="Accion inicial"
                opciones={["Servicio", "Recepcion"]}
                opAble={[true, true]}
                id={"accion" + eq}
                onChange={handleAccionChange}
              />
            )}
            <input className="boton botonPosIn" type="submit" value="Guardar" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default PosicionInicial;
