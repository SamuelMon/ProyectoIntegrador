import React, { useContext } from "react";
import "../styles/resumenFinal.css";
import { setsContext } from "../context/setsContext";
import { backendAxios } from "../utils";
import { IRContext } from "../context/IRContext";
import { sancionesContext } from "../context/sancionesContext";
import { useNavigate } from "react-router-dom";

function ResumenFinal() {
  const navigate = useNavigate();
  const {
    set,
    setsA,
    setsB,
    puntosASet1,
    puntosASet2,
    puntosASet3,
    puntosASet4,
    puntosASet5,
    puntosBSet1,
    puntosBSet2,
    puntosBSet3,
    puntosBSet4,
    puntosBSet5,
  } = useContext(setsContext);
  const {
    tiemposPersistASet1,
    tiemposPersistBSet1,
    tiemposPersistASet2,
    tiemposPersistBSet2,
    tiemposPersistASet3,
    tiemposPersistBSet3,
    tiemposPersistASet4,
    tiemposPersistBSet4,
    tiemposPersistASet5,
    tiemposPersistBSet5,
    sustitucionesASet1,
    sustitucionesBSet1,
    sustitucionesASet2,
    sustitucionesBSet2,
    sustitucionesASet3,
    sustitucionesBSet3,
    sustitucionesASet4,
    sustitucionesBSet4,
    sustitucionesASet5,
    sustitucionesBSet5,
  } = useContext(IRContext);

  const {
    sancionesPersistA,
    sancionesPersistB,
    sancionesDemoraPersistA,
    sancionesDemoraPersistB,
  } = useContext(sancionesContext);

  const formato = JSON.parse(localStorage.getItem("formatoSets")).formato;
  const equipo1 = JSON.parse(localStorage.getItem("InfoEquipo-eq1"));
  const { ladoInicial: ladoInicial1 } = equipo1;

  const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
  const nombreEquipoA =
    ladoInicial1 === "A"
      ? nombreEquiposJson.equipo1
      : nombreEquiposJson.equipo2;
  const nombreEquipoB =
    ladoInicial1 === "A"
      ? nombreEquiposJson.equipo2
      : nombreEquiposJson.equipo1;

  const columnas = [
    nombreEquipoA, //Nombre equipos A
    nombreEquipoB, //Nombre equipos B
    "Tiempos",
    "Sustituciones",
    "Sets Ganados",
    "Puntos",
    "Set",
    "Puntos",
    "Sets ganados",
    "Sustituciones",
    "Tiempos",
    tiemposPersistASet1.length, // tiempos equipo A set 1
    sustitucionesASet1, //Sustituciones equipo A set 1
    puntosASet1 > puntosBSet1 ? 1 : 0, //Sets ganados equipo A set 1
    puntosASet1, //Puntos equipo A set 1
    "1",
    puntosBSet1, //Puntos equipo B set 1
    puntosBSet1 > puntosASet1 ? 1 : 0, //Sets ganados equipo B set 1
    sustitucionesBSet1, //Sustituciones equipo B set 1
    tiemposPersistBSet1.length, // tiempos equipo B set 1
    tiemposPersistASet2.length, // tiempos equipo A set 2formato==="2 de 3"?"" :
    sustitucionesASet2, //Sustituciones equipo A set 2
    puntosASet2 > puntosBSet2 ? 1 : 0, //Sets ganados equipo A set 2
    puntosASet2, //Puntos equipo A set 2
    "2",
    puntosBSet2, //Puntos equipo B set 2
    puntosBSet2 > puntosASet2 ? 1 : 0, //Sets ganados equipo B set 2
    sustitucionesBSet2, //Sustituciones equipo B set 2
    tiemposPersistBSet2.length, //tiempos equipo B set 2
    tiemposPersistASet3.length, // tiempos equipo A set 3
    sustitucionesASet3, //Sustituciones equipo A set 3
    puntosASet3 > puntosBSet3 ? 1 : 0, //Sets ganados equipo A set 3
    puntosASet3, //Puntos equipo A set 3
    "3",
    puntosBSet3, //Puntos equipo B set 3
    puntosBSet3 > puntosASet3 ? 1 : 0, //Sets ganados equipo B set 3
    sustitucionesBSet3, //Sustituciones equipo B set 3
    tiemposPersistBSet3.length, // tiempos equipo B set 3
    formato === "2 de 3" ? "" : tiemposPersistASet4.length, // tiempos equipo A set 4
    formato === "2 de 3" ? "" : sustitucionesASet4, //Sustituciones equipo A set 4
    formato === "2 de 3" ? "" : puntosASet4 > puntosBSet4 ? 1 : 0, //Sets ganados equipo A set 4
    formato === "2 de 3" ? "" : puntosASet4, //Puntos equipo A set 4
    "4",
    formato === "2 de 3" ? "" : puntosBSet4, //Puntos equipo B set 4
    formato === "2 de 3" ? "" : puntosBSet4 > puntosASet4 ? 1 : 0, //Sets ganados equipo B set 4
    formato === "2 de 3" ? "" : sustitucionesBSet4, //Sustituciones equipo B set 4
    formato === "2 de 3" ? "" : tiemposPersistBSet4.length, // tiempos equipo B set 4
    formato === "2 de 3" ? "" : tiemposPersistASet5.length, // tiempos equipo A set 5
    formato === "2 de 3" ? "" : sustitucionesASet5, //Sustituciones equipo A set 5
    formato === "2 de 3" ? "" : puntosASet5 > puntosBSet5 ? 1 : 0, //Sets ganados equipo A set 5
    formato === "2 de 3" ? "" : puntosASet5, //Puntos equipo A set 5
    "5",
    formato === "2 de 3" ? "" : puntosBSet5, //Puntos equipo B set 5
    formato === "2 de 3" ? "" : puntosBSet5 > puntosASet5 ? 1 : 0, //Sets ganados equipo B set 5
    formato === "2 de 3" ? "" : sustitucionesBSet5, //Sustituciones equipo B set 5
    formato === "2 de 3" ? "" : tiemposPersistBSet5.length, // tiempos equipo B set 5
    tiemposPersistASet1.length +
      tiemposPersistASet2.length +
      tiemposPersistASet3.length, //Total tiempos equipo A
    sustitucionesASet1 + sustitucionesASet2 + sustitucionesASet3, //Total Sustituciones equipo A
    setsA, //Total sets ganados equipo A
    puntosASet1 + puntosASet2 + puntosASet3, //Total puntos equipo A
    "Total",
    puntosBSet1 + puntosBSet2 + puntosBSet3, //Total puntos equipo B
    setsB, //Total sets ganados equipo
    sustitucionesBSet1 + sustitucionesBSet2 + sustitucionesBSet3, //Total Sustituciones equipo B
    tiemposPersistBSet1.length +
      tiemposPersistBSet2.length +
      tiemposPersistBSet3.length, //Total tiempos equipo B
    "Ganador:",
    setsA > setsB ? nombreEquipoA : nombreEquipoB, //Nombre equipo ganador
    setsA > setsB ? `${setsA} : ${setsB}` : `${setsB} : ${setsA}`, //Total sets ganados Ganador:Perdedor
  ];

  const handleSubmitFinal = (event) => {
    event.preventDefault();
    // Aquí se puede hacer lo que se quiera con los datos del formulario
    const datosSetsBack = JSON.stringify({
      CantSets: set,
      puntosASet1,
      puntosASet2,
      puntosASet3,
      puntosBSet1,
      puntosBSet2,
      puntosBSet3,
    });

    

    backendAxios
      .post("http://localhost:5000/partidos/setn", datosSetsBack, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Equipo creado con éxito");
          // Realiza cualquier otra acción necesaria en el frontend
        } else {
          // Manejar otras respuestas de error aquí
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
        // Manejar el error de la petición aquí
      });
    alert("Información guardada de manera exitosa!");
    navigate("/");
  };

  return (
    <div>
      <div className="contenedor sombra resultados">
        <h1>Resultados</h1>
        {/* Primera fila con dos columnas */}
        <div className="fila">
          <div className="columna">{columnas[0]}</div>
          <div className="columna">{columnas[1]}</div>
        </div>

        {/* Segunda fila con nueve columnas */}
        <div className="fila">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="columna">
              {columnas[index + 2]}
            </div>
          ))}
        </div>

        {/* Tercera a octava fila con nueve columnas */}
        {[...Array(6)].map((_, filaIndex) => (
          <div key={filaIndex} className="fila">
            {[...Array(9)].map((_, columnaIndex) => (
              <div key={columnaIndex} className="columna">
                {columnas[filaIndex * 9 + columnaIndex + 11]}
              </div>
            ))}
          </div>
        ))}

        {/* Última fila con tres columnas */}
        <div className="fila">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="columna">
              {columnas[index + 65]}
            </div>
          ))}
        </div>
      </div>
      <div className="contenedorBtnFinalizarPartido">
        <button className="boton" onClick={handleSubmitFinal}>
          Finalizar Partido
        </button>
      </div>
    </div>
  );
}

export default ResumenFinal;
