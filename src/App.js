import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import InfoGeneral from './components/InfoGeneral';
import RegitroEquipos from './components/RegistroEquipos';


function App() {
  return (
    <Routes>
      <Route path='/' Component={InfoGeneral}></Route>
      <Route path='/infogen' Component={InfoGeneral}></Route>
      <Route path='/registroEq' Component={RegitroEquipos}></Route>
    </Routes>
  );
}

export default App;
