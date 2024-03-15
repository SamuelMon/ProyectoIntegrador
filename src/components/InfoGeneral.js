import React, { useState } from "react";
import Campo from "./Campo";
import { backendAxios } from "../utils";
import OpcionMultiple from "./OpcionMultiple";
import "../styles/infoGeneral.css";
import { useNavigate } from "react-router-dom";

function InfoGeneral() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombreCompe: "",
    ciudad: "",
    escenario: "",
    division: "",
    categoria: "",
    fecha: "",
    hora: "",
    equipo1: "",
    equipo2: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setDatos({
      ...datos,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede hacer lo que se quiera con los datos del formulario
    let Moncayo = JSON.stringify(datos);
    setDatos({
      nombreCompe: "",
      ciudad: "",
      escenario: "",
      division: "",
      formato: "",
      categoria: "",
      fecha: "",
      hora: "",
      equipo1: "",
      equipo2: "",
    });
    localStorage.setItem(
      "nombreEquipos",
      JSON.stringify({
        equipo1: datos.equipo1,
        equipo2: datos.equipo2,
      })
    );

    backendAxios
      .post("http://<tu_direccion_ip_publica>:5000", datos, {
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
    navigate("/registroEq");
  };

  return (
    <section className="contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="formulario__titulo">Informacion General</legend>
          <div className="formulario__contenedor__infogen">
            <Campo
              nombreCampo="Nombre de competencia"
              clase="formulario__input"
              type="text"
              placeholder="Competencia"
              mostrarLabel={true}
              id="nombreCompe"
              value={datos.nombreCompe}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Ciudad"
              clase="formulario__input"
              type="text"
              placeholder="Ciudad"
              mostrarLabel={true}
              id="ciudad"
              value={datos.ciudad}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Escenario Deportivo"
              clase="formulario__input"
              type="text"
              placeholder="Escenario"
              mostrarLabel={true}
              id="escenario"
              value={datos.escenario}
              onChange={handleInputChange}
            />
            <OpcionMultiple
              clase="formulario__input"
              nombreCampo="Formato"
              opcion1="2 de 3"
              opcion2="3 de 5"
              mostrarLabel={true}
              op1Able={true}
              op2Able={true}
              id="division"
              value={datos.formato}
              onChange={handleInputChange}
            />
            <OpcionMultiple
              clase="formulario__input"
              nombreCampo="Division"
              opcion1="Masculina"
              opcion2="Femenina"
              opcion3="Mixta"
              mostrarLabel={true}
              id="division"
              value={datos.division}
              op1Able={true}
              op2Able={true}
              op3Able={true}
              onChange={handleInputChange}
            />
            <OpcionMultiple
              clase="formulario__input"
              nombreCampo="Categoria"
              opcion1="Mayores"
              opcion2="Juvenil"
              opcion3="Menores"
              mostrarLabel={true}
              id="categoria"
              value={datos.categoria}
              op1Able={true}
              op2Able={true}
              op3Able={true}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Fecha"
              clase="formulario__input"
              type="date"
              placeholder="Fecha"
              mostrarLabel={true}
              id="fecha"
              value={datos.fecha}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Hora"
              clase="formulario__input"
              type="time"
              placeholder="Hora"
              mostrarLabel={true}
              id="hora"
              value={datos.hora}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Equipo 1"
              clase="formulario__input"
              type="text"
              placeholder="Equipo"
              mostrarLabel={true}
              id="equipo1"
              value={datos.equipo1}
              onChange={handleInputChange}
            />
            <Campo
              nombreCampo="Equipo 2"
              clase="formulario__input"
              type="text"
              placeholder="Equipo"
              mostrarLabel={true}
              id="equipo2"
              value={datos.equipo2}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input className="boton" type="submit" value="Registrar" />
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default InfoGeneral;
