import { React, useState, createContext } from "react";

export const setsContext = createContext({});

function SetsContextProvider({ children }) {
  const [set, setSet] = useState(1);

  return (
    <setsContext.Provider value={{ set, setSet }}>
      {children}
    </setsContext.Provider>
  );
}

export default SetsContextProvider;
