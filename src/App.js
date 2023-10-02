import './App.css';
import InfoGeneral from './components/InfoGeneral';
import IntegrantesEquipo from './components/IntegrantesEquipo';

function App() {
  return (
    <div className="App">
      {/* {<InfoGeneral/>} */}
      {<IntegrantesEquipo
      nombreEquipo ='Mexico' />}
    </div>
  );
}

export default App;
