import React from "react";
import AccionesEquipo from "./AccionesEquipo";
import "../styles/vistaPrincipal.css";
import { useEffect } from "react";
import { useState } from "react";

function VistaPrincipal() {
  const [equipoA, setEquipoA] = useState(undefined);
  const [equipoB, setEquipoB] = useState(undefined);
  const [nombreEquipoA, setNombreEquipoA] = useState("");
  const [nombreEquipoB, setNombreEquipoB] = useState("");
  const [ladoeqA, setLadoEqA] = useState("Izquierda");
  const [ladoeqB, setLadoEqB] = useState("Derecha");
  const [setsIzq, setSetsIzq] = useState("0");
  const [setsDer, setSetsDer] = useState("0");
  const [aux, setAux] = useState("0");
  
  useEffect(() => {
    const numerosEqA = JSON.parse(localStorage.getItem("RegistroEquipo-A"));
    const numerosEqB = JSON.parse(localStorage.getItem("RegistroEquipo-B"));
    const nombreEquiposJson = JSON.parse(localStorage.getItem("nombreEquipos"));
    setEquipoA(numerosEqA);
    setEquipoB(numerosEqB);

    const nombreEqA = nombreEquiposJson.equipo1
    const nombreEqB = nombreEquiposJson.equipo2

    setNombreEquipoA(nombreEqA)
    setNombreEquipoB(nombreEqB)
    
  }, []);

  const cambiarLado= ()=>{
    console.log(ladoeqA,ladoeqB)
    setAux(ladoeqA);
    setLadoEqA(ladoeqB);
    setLadoEqB(aux);
    console.log(ladoeqA,ladoeqB)

    console.log(setsIzq,setsDer)
    setAux(setsIzq);
    setSetsIzq(setsDer);
    setSetsDer(aux);
    console.log(setsIzq,setsDer)
   }
   console.log(ladoeqA,ladoeqB)



  const pos1eqA = equipoA?.numeros["1A"];
  const pos2eqA = equipoA?.numeros["2A"];
  const pos3eqA = equipoA?.numeros["3A"];
  const pos4eqA = equipoA?.numeros["4A"];
  const pos5eqA = equipoA?.numeros["5A"];
  const pos6eqA = equipoA?.numeros["6A"];

  const pos1eqB = equipoB?.numeros["1B"];
  const pos2eqB = equipoB?.numeros["2B"];
  const pos3eqB = equipoB?.numeros["3B"];
  const pos4eqB = equipoB?.numeros["4B"];
  const pos5eqB = equipoB?.numeros["5B"];
  const pos6eqB = equipoB?.numeros["6B"];


  return (
    <div className="contenedorVistaP">
      <div className={ladoeqA}>
        <AccionesEquipo
          lado ={ladoeqA}
          nombreEquipo={nombreEquipoA}
          pos1={pos1eqA}
          pos2={pos2eqA}
          pos3={pos3eqA}
          pos4={pos4eqA}
          pos5={pos5eqA}
          pos6={pos6eqA}
        />
      </div>
      <div className="sets" onClick={cambiarLado}>
        <p className="contenedor sombra">
          {setsIzq}-{setsDer}
        </p>
      </div>
      <div className={ladoeqB}>
        <AccionesEquipo
          lado ={ladoeqB}
          nombreEquipo={nombreEquipoB}
          pos1={pos1eqB}
          pos2={pos2eqB}
          pos3={pos3eqB}
          pos4={pos4eqB}
          pos5={pos5eqB}
          pos6={pos6eqB}
        />
      </div>
    </div>
  );
}

export default VistaPrincipal;
