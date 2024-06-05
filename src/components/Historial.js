import React, { useEffect, useState } from "react";
import "../styles/historial.css";
import { backendAxios } from "../utils";
import { useNavigate } from "react-router-dom";
import PartidoHistorial from "./PartidoHistorial";
import Modal from "./Modal";

function Historial() {
  const navigate = useNavigate();
  const [datosHistorial, setDatosHistorial] = useState([]);
  const navegar = () => {
    console.log(datosHistorial);
    navigate("/");
  };

  useEffect(() => {
    backendAxios
      .get("http://localhost:5000/partidos")
      .then((response) => {
        if (response.status === 200) {
          setDatosHistorial(response.datosHistorial);
          console.log("Datos recibidos con éxito", response.datosHistorial);
        } else {
          console.error("Error al obtener los datos", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la petición:", error);
      });
  }, []);

  const partidos = [
    {
      idpartido: 1,
      fecha: "2022-04-15T07:15:00.000Z",
      nomEq1: "wolves",
      nomEq2: "mondui",
    },
    {
      idpartido: 2,
      fecha: "2022-04-15T07:15:00.000Z",
      nomEq1: "Joan",
      nomEq2: "Kevin",
    },
    {
      idpartido: 3,
      fecha: "2022-04-15T07:15:00.000Z",
      nomEq1: "Hernando",
      nomEq2: "Astrid",
    },
    {
      idpartido: 4,
      fecha: "2022-04-15T07:15:00.000Z",
      nomEq1: "Sistemas",
      nomEq2: "Electrica",
    },
    {
      idpartido: 5,
      fecha: "2022-04-15T07:15:00.000Z",
      nomEq1: "UdeA",
      nomEq2: "Poli",
    },
  ];

  const [isModalPartidoOpen, setModalPartidoOpen] = useState(false);
  const openModalPartido = () => {
    setModalPartidoOpen(true);
  };
  const closeModalPartido = () => {
    setModalPartidoOpen(false);
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
        {partidos.map((partido) => (
          <PartidoHistorial
            idpartido={partido.idpartido}
            nombreEquipoA={partido.nomEq1.toUpperCase()}
            nombreEquipoB={partido.nomEq2.toUpperCase()}
            fecha={partido.fecha.substring(0, 10)}
            openModal={openModalPartido}
          />
        ))}
      </div>
      <Modal isOpen={isModalPartidoOpen} closeModal={closeModalPartido}>
        <div>Hola</div>
      </Modal>
    </div>
  );
}

export default Historial;
