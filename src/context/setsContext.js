import { React, useState, createContext } from "react";

export const setsContext = createContext({});

function SetsContextProvider({ children }) {
  const [set, setSet] = useState(1);
  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);
  const [puntosASet1, setPuntosASet1] = useState(0);
  const [puntosASet2, setPuntosASet2] = useState(0);
  const [puntosASet3, setPuntosASet3] = useState(0);
  const [puntosBSet1, setPuntosBSet1] = useState(0);
  const [puntosBSet2, setPuntosBSet2] = useState(0);
  const [puntosBSet3, setPuntosBSet3] = useState(0);

  return (
    <setsContext.Provider
      value={{
        set,
        setSet,
        setsA,
        setSetsA,
        setsB,
        setSetsB,
        puntosASet1,
        setPuntosASet1,
        puntosASet2,
        setPuntosASet2,
        puntosASet3,
        setPuntosASet3,
        puntosBSet1,
        setPuntosBSet1,
        puntosBSet2,
        setPuntosBSet2,
        puntosBSet3,
        setPuntosBSet3,
      }}
    >
      {children}
    </setsContext.Provider>
  );
}

export default SetsContextProvider;
