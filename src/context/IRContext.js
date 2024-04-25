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

  //Sustituciones
  const sustitucionesASet1 = 0;
  const sustitucionesBSet1 = 0;
  const sustitucionesASet2 = 0;
  const sustitucionesBSet2 = 0;
  const sustitucionesASet3 = 0;
  const sustitucionesBSet3 = 0;

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
        sustitucionesASet1,
        sustitucionesBSet1,
        sustitucionesASet2,
        sustitucionesBSet2,
        sustitucionesASet3,
        sustitucionesBSet3,
      }}
    >
      {children}
    </IRContext.Provider>
  );
}

export default IRContextProvider;
