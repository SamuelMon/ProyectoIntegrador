import "./App.css";
import { Route, Routes } from "react-router-dom";
import InfoGeneral from "./components/InfoGeneral";
import RegitroEquipos from "./components/RegistroEquipos";
import PosicionesIniciales from "./components/PosicionesIniciales";
import VistaPrincipal from "./components/VistaPrincipal";
import ResumenFinal from "./components/ResumenFinal";

function App() {
  return (
    <Routes>
      <Route path="/" Component={InfoGeneral}></Route>
      <Route path="/infogen" Component={InfoGeneral}></Route>
      <Route path="/registroEq" Component={RegitroEquipos}></Route>
      <Route path="/pos" Component={PosicionesIniciales}></Route>
      <Route path="/main" Component={VistaPrincipal}></Route>
      <Route path="/resumen" Component={ResumenFinal}></Route>2
    </Routes>
  );
}

export default App;
