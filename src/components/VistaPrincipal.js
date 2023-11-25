import {React,useEffect,useState} from "react";
import AccionesEquipo from "./AccionesEquipo";
import "../styles/vistaPrincipal.css";
import { useNavigate } from "react-router-dom";

function VistaPrincipal() {
  const [equipoA, setEquipoA] = useState(undefined);
  const [equipoB, setEquipoB] = useState(undefined);
  const [nombreEquipoA, setNombreEquipoA] = useState("");
  const [nombreEquipoB, setNombreEquipoB] = useState("");
  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);
  const [puntosEquipoA, setPuntosEquipoA] = useState(0);
  const [puntosEquipoB, setPuntosEquipoB] = useState(0);
  const navigate = useNavigate();
  
  const aumentarPuntosEquipoA = () => {
    setPuntosEquipoA((prevPuntosA) => prevPuntosA + 1);
  };
  
  const aumentarPuntosEquipoB = () => {
    setPuntosEquipoB((prevPuntosB) => prevPuntosB + 1);
  };
  
  const verificarGanador = () => {
    if (puntosEquipoA >= 25 && puntosEquipoA - puntosEquipoB >= 2) {
      setSetsA(setsA+1);
      navigate('/pos');
    } else if (puntosEquipoB >= 25 && puntosEquipoB - puntosEquipoA >= 2) {
      setSetsB(setsB+1);
      navigate('/pos');
    }
  };

  useEffect(() => {
    verificarGanador();
  }, [puntosEquipoA,puntosEquipoA]);
  

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
      <div className='izquierda'>
        <AccionesEquipo
          lado ='izquierda'
          nombreEquipo={nombreEquipoA}
          pos1={pos1eqA}
          pos2={pos2eqA}
          pos3={pos3eqA}
          pos4={pos4eqA}
          pos5={pos5eqA}
          pos6={pos6eqA}
          aumentarPuntos={aumentarPuntosEquipoA}
          puntos={puntosEquipoA}
        />
      </div>
      <div className="sets">
        <p className="contenedor sombra">
          {`${setsA}-${setsB}`}
        </p>
      </div>
      <div className='derecha'>
        <AccionesEquipo
          lado ='derecha'
          nombreEquipo={nombreEquipoB}
          pos1={pos1eqB}
          pos2={pos2eqB}
          pos3={pos3eqB}
          pos4={pos4eqB}
          pos5={pos5eqB}
          pos6={pos6eqB}
          aumentarPuntos={aumentarPuntosEquipoB}
          puntos={puntosEquipoB}
        />
      </div>
    </div>
  );
}

export default VistaPrincipal;
