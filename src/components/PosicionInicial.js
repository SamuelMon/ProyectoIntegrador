import React, { useState, useEffect } from "react";
import Campo from "./Campo";
import OpcionMultiple from "./OpcionMultiple";
import "../styles/posicionInicial.css";

function PosicionInicial(props) {
  const { eq } = props;
  const [nombreEquipo, setNombreEquipo] = useState("");
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.substring(0, 3);

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
    // traer info del localstorage
    const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
    const equipo2 = JSON.parse(localStorage.getItem("InfoEquipo-eq2"));

    const {
      jugadores: jugadores1,
      ladoInicial: ladoInicial1,
      numCamisetaJugadores: numCamisetaJugadores1,
    } = equipo1;
    const {
      jugadores: jugadores2,
      ladoInicial: ladoInicial2,
      numCamisetaJugadores: numCamisetaJugadores2,
    } = equipo2;

    const nombreEquipo = ladoInicial1 === eq ? nombreEquiposJson.equipo1 :nombreEquiposJson.equipo2
    
    setNombreEquipo(nombreEquipo);
  }, []);

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
    
    localStorage.setItem([`RegistroEquipo-${eq}`],JSON.stringify({
      numeros,
      accion
    }))
    if (eq == "A") {
      alert("Posiciones iniciales del equipo A registradas exitosamente!");
    } else {
      alert("Posiciones iniciales del equipo B registradas exitosamente!");
    }
  };

  return (
    <div className="contenedor sombra">
      <form className="formulario formularioPosIn" onSubmit={Envio}>
        <fieldset>
          <legend className="formulario__titulo">{nombreEquipoStr}</legend>
          <div className="posicionesIniciales">
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="4"
              id={"4" + eq}
              onChange={handleNumberChange}
            />
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="3"
              id={"3" + eq}
              onChange={handleNumberChange}
            />
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="2"
              id={"2" + eq}
              onChange={handleNumberChange}
            />
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="5"
              id={"5" + eq}
              onChange={handleNumberChange}
            />
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="6"
              id={"6" + eq}
              onChange={handleNumberChange}
            />
            <Campo
              clase="formulario__input posicionInicial"
              type="number"
              placeholder="1"
              id={"1" + eq}
              onChange={handleNumberChange}
            />
          </div>
          <div className="contAuxPos">
            <OpcionMultiple
              clase="formulario__input accionIn"
              nombreCampo="Accion inicial"
              opcion1="Servicio"
              opcion2="Recepcion"
              id={"accion" + eq}
              onChange={handleAccionChange}
            />
            <input
              className="boton botonPosIn"
              type="submit"
              value="Guardar"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default PosicionInicial;
