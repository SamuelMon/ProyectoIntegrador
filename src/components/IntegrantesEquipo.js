import React, { useEffect, useState } from "react";
import Jugador from "./Jugador";
import "../styles/integrantesEquipo.css";
import OpcionMultiple from "./OpcionMultiple";

function IntegrantesEquipo(props) {
  const { numEq } = props;
  const [nombreEquipo, setNombreEquipo] = useState("");
  const aux = `${nombreEquipo}`;
  const nombreEquipoStr = aux.replace(" ", "");
  const ladoInicial = "ladoInicial";

  const [jugadores, setJugadores] = useState({
    [`ladoInicial${numEq}`]: "",
    [`nombJ1${numEq}`]: "",
    [`nombJ2${numEq}`]: "",
    [`nombJ3${numEq}`]: "",
    [`nombJ4${numEq}`]: "",
    [`nombJ5${numEq}`]: "",
    [`nombJ6${numEq}`]: "",
    [`nombJ7${numEq}`]: "",
    [`nombJ8${numEq}`]: "",
    [`nombJ9${numEq}`]: "",
    [`nombJ10${numEq}`]: "",
    [`nombJ11${numEq}`]: "",
    [`nombJ12${numEq}`]: "",
    [`nombJ13${numEq}`]: "",
    [`nombJ14${numEq}`]: "",
  });
  const [numCamisetaJugadores, setNumCamisetaJugadores] = useState({
    [`numJ1${numEq}`]: "",
    [`numJ2${numEq}`]: "",
    [`numJ3${numEq}`]: "",
    [`numJ4${numEq}`]: "",
    [`numJ5${numEq}`]: "",
    [`numJ6${numEq}`]: "",
    [`numJ7${numEq}`]: "",
    [`numJ8${numEq}`]: "",
    [`numJ9${numEq}`]: "",
    [`numJ10${numEq}`]: "",
    [`numJ11${numEq}`]: "",
    [`numJ12${numEq}`]: "",
    [`numJ13${numEq}`]: "",
    [`numJ14${numEq}`]: "",
  });
  useEffect(() => {
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    setNombreEquipo(
      numEq == "eq1" ? nombreEquiposJson.equipo1 : nombreEquiposJson.equipo2
    );
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setJugadores((prevJugadores) => ({
      ...prevJugadores,
      [id]: value,
    }));
  };

  const handleCamisetaChange = (event) => {
    const { id, value } = event.target;
    setNumCamisetaJugadores((prevCamisas) => ({
      ...prevCamisas,
      [id]: value,
    }));
  };

  const Envio = async (event) => {
    event.preventDefault();

    const { [`ladoInicial${numEq}`]: ladoInicial, ...nombreJugadores } =
      jugadores;

    localStorage.setItem(
      `InfoEquipo-${numEq}`,
      JSON.stringify({
        jugadores: nombreJugadores,
        ladoInicial,
        numCamisetaJugadores,
      })
    );
    if (numEq === "eq1") {
      alert("Jugadores del equipo 1 guardados exitosamente!");
    } else {
      alert("Jugadores del equipo 2 guardados exitosamente!");
    }
  };

  

  return (
    <section className="contenedor sombra contenedor__equipos">
      <form className="formulario" onSubmit={Envio}>
        <legend className="formulario__titulo">{nombreEquipoStr}</legend>
        <OpcionMultiple
          clase="formulario__input omIntegrantes"
          nombreCampo="Lado inicial"
          opcion1="A"
          opcion2="B"
          op1Able={true}
          op2Able={true}
          id={ladoInicial + numEq}
          onChange={handleInputChange}
        />
        <div className="contenedorLabel">
          <label className="numeroLabel">N°</label>
          <label>Nombre</label>
        </div>
        <div className="contenedor__equipo">
          <Jugador
            numJ="1"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="2"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="3"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="4"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="5"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="6"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="7"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="8"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="9"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="10"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="11"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            numJ="12"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            nombre="Jugador Libero"
            label={true}
            placeholder="Libero"
            numJ="13"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
          <Jugador
            placeholder="Libero"
            numJ="14"
            eq={numEq}
            onChange={handleInputChange}
            onChangeCamiseta={handleCamisetaChange}
          />
        </div>
        <input className="boton" type="submit" value="Guardar" />
      </form>
    </section>
  );
}

export default IntegrantesEquipo;