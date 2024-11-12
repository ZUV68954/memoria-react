import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Tablero from './Tablero';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Tablero />
        </header>
      </div>
  );
}

export default App;