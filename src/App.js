import "./App.css";
import { Route, Routes } from "react-router-dom";
import InfoGeneral from "./components/InfoGeneral";
import RegitroEquipos from "./components/RegistroEquipos";
import PosicionesIniciales from "./components/PosicionesIniciales";
import VistaPrincipal from "./components/VistaPrincipal";
import ResumenFinal from "./components/ResumenFinal";
import SetsContextProvider from "./context/setsContext";
import SancionesContextProvider from "./context/sancionesContext";
import IRContextProvider from "./context/IRContext";
import MenuInicial from "./components/MenuInicial";

function App() {
  return (
    <SetsContextProvider>
      <SancionesContextProvider>
        <IRContextProvider>
          <Routes>
            <Route path="/" Component={MenuInicial}></Route>
            <Route path="/infogen" Component={InfoGeneral}></Route>
            <Route path="/registroEq" Component={RegitroEquipos}></Route>
            <Route path="/pos" Component={PosicionesIniciales}></Route>
            <Route path="/main" Component={VistaPrincipal}></Route>
            <Route path="/resumen" Component={ResumenFinal}></Route>
          </Routes>
        </IRContextProvider>
      </SancionesContextProvider>
    </SetsContextProvider>
  );
}

export default App;
