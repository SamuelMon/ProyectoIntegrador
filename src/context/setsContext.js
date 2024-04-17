import { React, useState, createContext } from "react";

export const setsContext = createContext({});

function SetsContextProvider({ children }) {
  const [set, setSet] = useState(1);
  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);

  return (
    <setsContext.Provider
      value={{ set, setSet, setsA, setSetsA, setsB, setSetsB }}
    >
      {children}
    </setsContext.Provider>
  );
}

export default SetsContextProvider;
