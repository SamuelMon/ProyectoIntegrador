import React, { useState, useEffect, useContext } from "react";
import OpcionMultiple from "./OpcionMultiple";
import { setsContext } from "../context/setsContext";
import "../styles/posicionInicial.css";

function PosicionInicial(props) {
  const { set } = useContext(setsContext);
  const accionInicialAble = set === 1 || set === 3;
  const { eq } = props;
  const [nombreEquipo, setNombreEquipo] = useState("");
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.toUpperCase();

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
  useEffect(() => {
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));

    const nombreEquipo =
      ladoInicial1 === eq
        ? nombreEquiposJson.equipo1
        : nombreEquiposJson.equipo2;

    setNombreEquipo(nombreEquipo);
  }, []);
  // traer info del localstorage
  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

  const {
    // jugadores: jugadores1,
    ladoInicial: ladoInicial1,
    numCamisetaJugadores: numJugadoresA,
  } = equipo1;
  const {
    // jugadores: jugadores2,
    // ladoInicial: ladoInicial2,
    numCamisetaJugadores: numJugadoresB,
  } = equipo2;

  let arrNumJugadores1 = Object.values(numJugadoresA).filter(
    (numero) => numero
  );
  let arrNumJugadores2 = Object.values(numJugadoresB).filter(
    (numero) => numero
  );
  const [
    numJ1eqA = "",
    numJ2eqA = "",
    numJ3eqA = "",
    numJ4eqA = "",
    numJ5eqA = "",
    numJ6eqA = "",
    numJ7eqA = "",
    numJ8eqA = "",
    numJ9eqA = "",
    numJ10eqA = "",
    numJ11eqA = "",
    numJ12eqA = "",
  ] = arrNumJugadores1;
  const [
    numJ1eqB = "",
    numJ2eqB = "",
    numJ3eqB = "",
    numJ4eqB = "",
    numJ5eqB = "",
    numJ6eqB = "",
    numJ7eqB = "",
    numJ8eqB = "",
    numJ9eqB = "",
    numJ10eqB = "",
    numJ11eqB = "",
    numJ12eqB = "",
  ] = arrNumJugadores2;

  const handleAccionChange = (event) => {
    const { id, value } = event.target;
    console.log({ id, value });
    setAccion((prevAccion) => ({
      ...prevAccion,
      [id]: value,
    }));
  };

  const handleNumberChange = (event) => {
    const { id, value } = event.target;
    console.log({ id, value });
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
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"3" + eq}
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"2" + eq}
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"5" + eq}
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"6" + eq}
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
            <OpcionMultiple
              clase="formulario__input posicionInicial"
              id={"1" + eq}
              opcion1={eq === "A" ? numJ1eqA : numJ1eqB}
              opcion2={eq === "A" ? numJ2eqA : numJ2eqB}
              opcion3={eq === "A" ? numJ3eqA : numJ3eqB}
              opcion4={eq === "A" ? numJ4eqA : numJ4eqB}
              opcion5={eq === "A" ? numJ5eqA : numJ5eqB}
              opcion6={eq === "A" ? numJ6eqA : numJ6eqB}
              opcion7={eq === "A" ? numJ7eqA : numJ7eqB}
              opcion8={eq === "A" ? numJ8eqA : numJ8eqB}
              opcion9={eq === "A" ? numJ9eqA : numJ9eqB}
              opcion10={eq === "A" ? numJ10eqA : numJ10eqB}
              opcion11={eq === "A" ? numJ11eqA : numJ11eqB}
              opcion12={eq === "A" ? numJ12eqA : numJ12eqB}
              op1Able={
                eq === "A" ? numJ1eqA !== "" && true : numJ1eqB !== "" && true
              }
              op2Able={
                eq === "A" ? numJ2eqA !== "" && true : numJ2eqB !== "" && true
              }
              op3Able={
                eq === "A" ? numJ3eqA !== "" && true : numJ3eqB !== "" && true
              }
              op4Able={
                eq === "A" ? numJ4eqA !== "" && true : numJ4eqB !== "" && true
              }
              op5Able={
                eq === "A" ? numJ5eqA !== "" && true : numJ5eqB !== "" && true
              }
              op6Able={
                eq === "A" ? numJ6eqA !== "" && true : numJ6eqB !== "" && true
              }
              op7Able={
                eq === "A" ? numJ7eqA !== "" && true : numJ7eqB !== "" && true
              }
              op8Able={
                eq === "A" ? numJ8eqA !== "" && true : numJ8eqB !== "" && true
              }
              op9Able={
                eq === "A" ? numJ9eqA !== "" && true : numJ9eqB !== "" && true
              }
              op10Able={
                eq === "A" ? numJ10eqA !== "" && true : numJ1eqB !== "" && true
              }
              op11Able={
                eq === "A" ? numJ11eqA !== "" && true : numJ11eqB !== "" && true
              }
              op12Able={
                eq === "A" ? numJ12eqA !== "" && true : numJ12eqB !== "" && true
              }
              onChange={handleNumberChange}
            />
          </div>
          <div className="contAuxPos">
            {accionInicialAble && (
              <OpcionMultiple
                clase="formulario__input accionIn"
                nombreCampo="Accion inicial"
                opcion1="Servicio"
                opcion2="Recepcion"
                op1Able={true}
                op2Able={true}
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
