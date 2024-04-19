import { React, useState, createContext } from "react";

export const sancionesContext = createContext({});

function SancionesContextProvider({ children }) {
  const initialState = Array.from({ length: 14 }, () => 0);

  const [sancionesJA, setSancionesJA] = useState([...initialState]);
  const [sancionesJB, setSancionesJB] = useState([...initialState]);

  const [sancionesPersistA, setSancionesPersistA] = useState([]);
  const [sancionesPersistB, setSancionesPersistB] = useState([]);

  const consultarNumero = () => {
    for (let index = 0; index < sancionesJA.length; index++) {
      console.log(sancionesJA[index]);
      console.log(sancionesJB[index]);
    }
  };

  const log = () => {
    console.log(sancionesPersistA[0]);
    console.log(sancionesPersistB[0]);
    console.log(sancionesPersistA[1]);
    console.log(sancionesPersistB[1]);
    console.log(sancionesPersistA[2]);
    console.log(sancionesPersistB[2]);
    console.log(sancionesPersistA[3]);
    console.log(sancionesPersistB[3]);
    console.log(sancionesPersistA[4]);
    console.log(sancionesPersistB[4]);
    console.log(sancionesPersistA[5]);
    console.log(sancionesPersistB[5]);
    console.log(sancionesPersistA[6]);
    console.log(sancionesPersistB[6]);
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
        consultarNumero,
      }}
    >
      {children}
    </sancionesContext.Provider>
  );
}

export default SancionesContextProvider;
