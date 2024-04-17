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

  const log = () => {};

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
