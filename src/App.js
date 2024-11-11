import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Tablero from './Tablero';

function App() {
  return (
    < !DOCTYPE html >
    <html>
      <head>
        <title>Daily Bugle</title>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
          <style type="text/css">
            .col-md-1,
            .col-md-2,
            .col-md-3,
            .col-md-4,
            .col-md-6,
            .col-md-8 {
              color: white;
            border: 1px solid white;
        }

            .card {
              box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            width: 40%;
        }

            .card:hover {
              box - shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

            .container {
              padding: 2px 16px;
        }
          </style>
      </head>
      <div className="App">
        <header className="App-header">

          <Tablero />
        </header>
      </div>
    </html>
  );
}

export default App;
