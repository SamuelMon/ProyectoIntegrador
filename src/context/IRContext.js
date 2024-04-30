import { React, useState, createContext } from "react";

export const IRContext = createContext({});

function IRContextProvider({ children }) {
  //Tiempos------------------------------------------
  const [tiemposPersistASet1, setTiemposPersistASet1] = useState([]);
  const [tiemposPersistBSet1, setTiemposPersistBSet1] = useState([]);
  const [tiemposPersistASet2, setTiemposPersistASet2] = useState([]);
  const [tiemposPersistBSet2, setTiemposPersistBSet2] = useState([]);
  const [tiemposPersistASet3, setTiemposPersistASet3] = useState([]);
  const [tiemposPersistBSet3, setTiemposPersistBSet3] = useState([]);
  const [tiemposPersistASet4, setTiemposPersistASet4] = useState([]);
  const [tiemposPersistBSet4, setTiemposPersistBSet4] = useState([]);
  const [tiemposPersistASet5, setTiemposPersistASet5] = useState([]);
  const [tiemposPersistBSet5, setTiemposPersistBSet5] = useState([]);

  //Sustituciones
  const sustitucionesASet1 = 0;
  const sustitucionesBSet1 = 0;
  const sustitucionesASet2 = 0;
  const sustitucionesBSet2 = 0;
  const sustitucionesASet3 = 0;
  const sustitucionesBSet3 = 0;
  const sustitucionesASet4 = 0;
  const sustitucionesBSet4 = 0;
  const sustitucionesASet5 = 0;
  const sustitucionesBSet5 = 0;

  return (
    <IRContext.Provider
      value={{
        tiemposPersistASet1,
        tiemposPersistBSet1,
        setTiemposPersistASet1,
        setTiemposPersistBSet1,
        tiemposPersistASet2,
        tiemposPersistBSet2,
        setTiemposPersistASet2,
        setTiemposPersistBSet2,
        tiemposPersistASet3,
        tiemposPersistBSet3,
        setTiemposPersistASet3,
        setTiemposPersistBSet3,
        tiemposPersistASet4,
        tiemposPersistBSet4,
        setTiemposPersistASet4,
        setTiemposPersistBSet4,
        tiemposPersistASet5,
        tiemposPersistBSet5,
        setTiemposPersistASet5,
        setTiemposPersistBSet5,
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
      }}
    >
      {children}
    </IRContext.Provider>
  );
}

export default IRContextProvider;
