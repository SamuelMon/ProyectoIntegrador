import React, { useEffect, useState } from "react";
import "../styles/historial.css";
import { backendAxios } from "../utils";
import { useNavigate } from "react-router-dom";
import PartidoHistorial from "./PartidoHistorial";
import Modal from "./Modal";

function Historial() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [partidoSeleccionado, setPartidoSeleccionado] = useState(null);
  const [isModalPartidoOpen, setModalPartidoOpen] = useState(false);

  const navegar = () => {
    navigate("/");
  };

  useEffect(() => {
    backendAxios  
      .get("http://localhost:5000/partidos")
      .then((response) => {
        if (response.status === 200) {
          setDatos(response.data);
          console.log("Datos recibidos con éxito", response.data);
        } else {
          console.error("Error al obtener los datos", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
      });
  }, []);

  const pedirInfo = (id) => {
    backendAxios
      .request({
        url: 'http://localhost:5000/partido',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: id
        }
      })
      .then((response) => {
        if (response.status === 200) {
          const datosPartido = response.data;

          // Llenar con valores nulos los sets no jugados
          for (let i = 1; i <= 5; i++) {
            if (!datosPartido[`puntosEqASet${i}`]) datosPartido[`puntosEqASet${i}`] = null;
            if (!datosPartido[`puntosEqBSet${i}`]) datosPartido[`puntosEqBSet${i}`] = null;
          }

          setPartidoSeleccionado(datosPartido);
          openModalPartido();
        } else {
          console.error("Error al obtener los datos del partido", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
      });
  };

  const openModalPartido = () => {
    setModalPartidoOpen(true);
  };

  const closeModalPartido = () => {
    setModalPartidoOpen(false);
    setPartidoSeleccionado(null);
  };

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
        {datos.map((partido) => (
          <PartidoHistorial
            key={partido.idpartido}
            idpartido={partido.idpartido}
            nombreEquipoA={partido.nomEq1 ? partido.nomEq1.toUpperCase() : ""}
            nombreEquipoB={partido.nomEq2 ? partido.nomEq2.toUpperCase() : ""}
            fecha={partido.fecha ? partido.fecha.substring(0, 10) : ""}
            openModal={openModalPartido}
            pedirInfo={pedirInfo}
          />
        ))}
      </div>
      <Modal isOpen={isModalPartidoOpen} closeModal={closeModalPartido}>
        {partidoSeleccionado ? (
          <div>
            <h2>Información del Partido</h2>
            <p>{`Ciudad: ${partidoSeleccionado.ciudad || ''}`}</p>
            <p>{`Escenario: ${partidoSeleccionado.escenario || ''}`}</p>
            <p>{`División: ${partidoSeleccionado.division || ''}`}</p>
            <p>{`Categoría: ${partidoSeleccionado.categoria || ''}`}</p>
            <p>{`Fecha: ${partidoSeleccionado.fecha || ''}`}</p>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((setNum) => (
              <div key={setNum}>
                {partidoSeleccionado[`puntosEqASet${setNum}`] !== null && (
                  <p>{`Puntos Equipo A Set ${setNum}: ${partidoSeleccionado[`puntosEqASet${setNum}`]}`}</p>
                )}
                {partidoSeleccionado[`puntosEqBSet${setNum}`] !== null && (
                  <p>{`Puntos Equipo B Set ${setNum}: ${partidoSeleccionado[`puntosEqBSet${setNum}`]}`}</p>
                )}
              </div>
            ))}
            <p>{`Sets Equipo A: ${partidoSeleccionado.setsEqA || ''}`}</p>
            <p>{`Sets Equipo B: ${partidoSeleccionado.setsEqB || ''}`}</p>
          </div>
        ) : (
          <p>Cargando información del partido...</p>
        )}
      </Modal>
    </div>
  );
}

export default Historial;
