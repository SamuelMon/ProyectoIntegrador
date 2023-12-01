import React from "react";
import "../styles/resumenFinal.css";
import { json } from "react-router-dom";

function ResumenFinal() {
  const infoPrimerSet = JSON.parse(localStorage.getItem("infoPrimerSet"));
  const infoSegundoSet = JSON.parse(localStorage.getItem("infoSegundoSet"));
  const infoTercerSet = JSON.parse(localStorage.getItem("infoTercerSet"));
  const equiposYGanador = JSON.parse(localStorage.getItem("equipos"));
  const setsGanadorPerdedor = JSON.parse(localStorage.getItem("setsResultado"));
  const {
    tiemposEquipoA: tiemposEquipoASet1,
    tiemposEquipoB: tiemposEquipoBSet1,
    puntosEquipoA: puntosEquipoASet1,
    puntosEquipoB: puntosEquipoBSet1,
    setsA: setsASet1,
    setsB: setsBSet1,
  } = infoPrimerSet;
  const {
    tiemposEquipoA: tiemposEquipoASet2,
    tiemposEquipoB: tiemposEquipoBSet2,
    puntosEquipoA: puntosEquipoASet2,
    puntosEquipoB: puntosEquipoBSet2,
    setsA: setsASet2,
    setsB: setsBSet2,
  } = infoSegundoSet;
  const {
    tiemposEquipoA: tiemposEquipoASet3,
    tiemposEquipoB: tiemposEquipoBSet3,
    puntosEquipoA: puntosEquipoASet3,
    puntosEquipoB: puntosEquipoBSet3,
    setsA: setsASet3,
    setsB: setsBSet3,
  } = infoTercerSet;

  const {
    equipoLadoA: nombreEquipoA,
    equipoLadoB: nombreEquipoB,
    equipoGanador: equipoGanador,
  } = equiposYGanador;

  const {
    setsGanador: setsGanador,
    setsPerdedor: setsPerdedor,
  } = setsGanadorPerdedor;

  let totalPuntosEquipoA =
    puntosEquipoASet1 + puntosEquipoASet2 + puntosEquipoASet3;

  let totalTiemposEquipoA =
    tiemposEquipoASet1 + tiemposEquipoASet2 + tiemposEquipoASet3;

  let totalSetsEquipoA = setsASet1 + setsASet2 + setsASet3;

  let totalPuntosEquipoB =
    puntosEquipoBSet1 + puntosEquipoBSet2 + puntosEquipoBSet3;

  let totalTiemposEquipoB =
    tiemposEquipoBSet1 + tiemposEquipoBSet2 + tiemposEquipoBSet3;

  let totalSetsEquipoB = setsBSet1 + setsBSet2 + setsBSet3;

  console.log("infoPrimerSet:", infoPrimerSet);
  console.log("infoSegundoSet:", infoSegundoSet);
  console.log("infoTercerSet:", infoTercerSet);

  console.log(
    totalPuntosEquipoA,
    totalSetsEquipoA,
    totalTiemposEquipoA,
    tiemposEquipoASet1,
    equipoGanador,
    setsGanador,
    setsPerdedor,
  );

  const columnas = [
    nombreEquipoA, //Nombre equipos A
    nombreEquipoB, //Nombre equipos B
    "Tiempos",
    "Sustiuciones",
    "Sets Ganados",
    "Puntos",
    "Set",
    "Puntos",
    "Sets ganados",
    "Sustituciones",
    "Tiempos",
    tiemposEquipoASet1, //Tiempos equipo A set 1
    "", //Sustituciones equipo A set 1
    setsASet1, //Sets ganados equipo A set 1
    puntosEquipoASet1, //Puntos equipo A set 1
    "1",
    puntosEquipoBSet1, //Puntos equipo B set 1
    setsBSet1, //Sets ganados equipo B set 1
    "", //Sustituciones equipo B set 1
    tiemposEquipoBSet1, //Tiempos equipo B set 1
    tiemposEquipoASet2, //Tiempos equipo A set 2
    "", //Sustituciones equipo A set 2
    setsASet2, //Sets ganados equipo A set 2
    puntosEquipoASet2, //Puntos equipo A set 2
    "2",
    puntosEquipoBSet2, //Puntos equipo B set 2
    setsBSet2, //Sets ganados equipo B set 2
    "", //Sustituciones equipo B set 2
    tiemposEquipoBSet2, //Tiempos equipo B set 2
    tiemposEquipoASet3, //Tiempos equipo A set 3
    "", //Sustituciones equipo A set 3
    setsASet3, //Sets ganados equipo A set 3
    puntosEquipoASet3, //Puntos equipo A set 3
    "3",
    puntosEquipoBSet3, //Puntos equipo B set 3
    setsBSet3, //Sets ganados equipo B set 3
    "", //Sustituciones equipo B set 3
    tiemposEquipoBSet3, //Tiempos equipo B set 3
    totalTiemposEquipoA, //Total tiempos equipo A
    "", //Total Sustituciones equipo A
    totalSetsEquipoA, //Total sets ganados equipo A
    totalPuntosEquipoA, //Total puntos equipo A
    "Total",
    totalPuntosEquipoB, //Total puntos equipo B
    totalSetsEquipoB, //Total sets ganados equipo
    "", //Total Sustituciones equipo B
    totalTiemposEquipoB, //Total tiempos equipo B
    "Ganador:",
    equipoGanador, //Nombre equipo ganador
    setsGanador+":"+setsPerdedor, //Total sets ganados Ganador:Perdedor
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
