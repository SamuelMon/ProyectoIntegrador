import React, { useEffect, useState } from "react";
import "../styles/historial.css";
import { backendAxios } from "../utils";
import { useNavigate } from "react-router-dom";
import PartidoHistorial from "./PartidoHistorial";

function Historial() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const navegar = () => {
    console.log(data);
    navigate("/");
  };

  useEffect(() => {
    backendAxios.get('http://localhost:5000/partidos')
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
          console.log("Datos recibidos con éxito", response.data);
        } else {
          console.error("Error al obtener los datos", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
      });
  }, []);
  
  
  /*const handleNavigation = () => {
    alert("Navegando a otra página!");
    navigate("/otraRuta");
  };*/

  console.log(data);

  return (
    <div className="contenedorMainHistorial">
      <div className="barraSuperior sombra">
        <svg
          onClick={navegar}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-left"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
          <path d="M8 12l4 4" />
          <path d="M8 12h8" />
          <path d="M12 8l-4 4" />
        </svg>
        <h1 className="tituloHistorial">Historial</h1>
      </div>
      <div className="contenedorPartidosHistorial">
        <PartidoHistorial
          nombreEquipoA="Joan"
          nombreEquipoB="Kevin"
          fecha="23/05/2024"
        />
        <PartidoHistorial
          nombreEquipoA="Joan"
          nombreEquipoB="Samuel"
          fecha="23/05/2024"
        />
        <PartidoHistorial
          nombreEquipoA="Hernando"
          nombreEquipoB="Astrid"
          fecha="22/05/2024"
        />
        <PartidoHistorial
          nombreEquipoA="Kevin"
          nombreEquipoB="Astrid"
          fecha="21/05/2024"
        />
        <PartidoHistorial
          nombreEquipoA="Joan"
          nombreEquipoB="Astrid"
          fecha="24/05/2024"
        />
      </div>
    </div>
  );
}

export default Historial;