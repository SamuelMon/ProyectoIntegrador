import React from "react";
import "../styles/resumenFinal.css";

function ResumenFinal() {
  const columnas = [
    "Salgar", //Nombre equipos A
    "Ciudad Bolivar", //Nombre equipos B
    "Tiempos",
    "Sustiuciones",
    "Sets Ganados",
    "Puntos",
    "Set",
    "Puntos",
    "Sets ganados",
    "Sustituciones",
    "Tiempos",
    "", //Tiempos equipo A set 1
    "", //Sustituciones equipo A set 1
    "", //Sets ganados equipo A set 1
    "", //Puntos equipo A set 1
    "1",
    "", //Puntos equipo B set 1
    "", //Sets ganados equipo B set 1
    "", //Sustituciones equipo B set 1
    "", //Tiempos equipo B set 1
    "", //Tiempos equipo A set 2
    "", //Sustituciones equipo A set 2
    "", //Sets ganados equipo A set 2
    "", //Puntos equipo A set 2
    "2",
    "", //Puntos equipo B set 2
    "", //Sets ganados equipo B set 2
    "", //Sustituciones equipo B set 2
    "", //Tiempos equipo B set 2
    "", //Tiempos equipo A set 3
    "", //Sustituciones equipo A set 3
    "", //Sets ganados equipo A set 3
    "", //Puntos equipo A set 3
    "3",
    "", //Puntos equipo B set 3
    "", //Sets ganados equipo B set 3
    "", //Sustituciones equipo B set 3
    "", //Tiempos equipo B set 3
    "", //Total tiempos equipo A
    "", //Total Sustituciones equipo A
    "", //Total sets ganados equipo A
    "", //Total puntos equipo A
    "Total",
    "", //Total puntos equipo B
    "", //Total sets ganados equipo
    "", //Total Sustituciones equipo B
    "", //Total tiempos equipo B
    "Ganador:",
    "Salgar", //Nombre equipo ganador
    "2:0", //Total sets ganados Ganador:Perdedor
  ];
  return (
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

      {/* Tercera a quinta fila con nueve columnas */}
      {[...Array(4)].map((_, filaIndex) => (
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
            {columnas[index + 47]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumenFinal;
