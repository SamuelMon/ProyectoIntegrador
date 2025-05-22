import { React, useState, createContext } from "react";

export const sancionesContext = createContext({});

function SancionesContextProvider({ children }) {
  //Sanciones Conductuales---------------------------------------
  const initialState = Array.from({ length: 14 }, () => 0);

  const [sancionesJA, setSancionesJA] = useState([...initialState]);
  const [sancionesJB, setSancionesJB] = useState([...initialState]);

  const [sancionesPersistA, setSancionesPersistA] = useState([]);
  const [sancionesPersistB, setSancionesPersistB] = useState([]);

  //Sanciones por demora ----------------------------------------
  const [sancionesDemoraPersistA, setSancionesDemoraPersistA] = useState([]);
  const [sancionesDemoraPersistB, setSancionesDemoraPersistB] = useState([]);

  const log = () => {
    console.log(sancionesDemoraPersistA[0]);
    console.log(sancionesDemoraPersistA[1]);
    console.log(sancionesDemoraPersistB[0]);
    console.log(sancionesDemoraPersistB[1]);
  };

  return (
    <sancionesContext.Provider
      value={{
        sancionesJA,
        setSancionesJA,
        sancionesJB,
        setSancionesJB,
        setSancionesPersistA,
        sancionesPersistA,
        setSancionesPersistB,
        sancionesPersistB,
        log,
        sancionesDemoraPersistA,
        sancionesDemoraPersistB,
        setSancionesDemoraPersistA,
        setSancionesDemoraPersistB,
      }}
    >
      {children}
    </sancionesContext.Provider>
  );
}

export default SancionesContextProvider;
