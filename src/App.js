import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Tablero from './Tablero';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Juego de Memoria</h1>
          <Tablero />
        </header>
      </div>
  );
}

export default App;