import { React, useState, createContext } from "react";

export const sancionesContext = createContext({});

function SancionesContextProvider({ children }) {
  const [j1, setJ1] = useState(0);
  const [j2, setJ2] = useState(0);
  const [j3, setJ3] = useState(0);
  const [j4, setJ4] = useState(0);
  const [j5, setJ5] = useState(0);
  const [j6, setJ6] = useState(0);
  const [j7, setJ7] = useState(0);
  const [j8, setJ8] = useState(0);
  const [j9, setJ9] = useState(0);
  const [j10, setJ10] = useState(0);
  const [j11, setJ11] = useState(0);
  const [j12, setJ12] = useState(0);
  const [j13, setJ13] = useState(0);
  const [j14, setJ14] = useState(0);

  return (
    <setsContext.Provider
      value={{
        j1,
        setJ1,
        j2,
        setJ2,
        j3,
        setJ3,
        j4,
        setJ4,
        j5,
        setJ5,
        j6,
        setJ6,
        j7,
        setJ7,
        j8,
        setJ8,
        j9,
        setJ9,
        j10,
        setJ10,
        j11,
        setJ11,
        j12,
        setJ12,
        j13,
        setJ13,
        j14,
        setJ14,
      }}
    >
      {children}
    </setsContext.Provider>
  );
}

export default SancionesContextProvider;
