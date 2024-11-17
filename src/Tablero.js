import React, { useState } from "react";
import Carta from "./Carta";
import "./styles.css";

const Tablero = () => {
  const [cartas, setCartas] = useState(generateDeck());
  const [volteadas, setVolteadas] = useState([]);
  
  // Función para manejar el click en una carta
  const manejarClick = (id) => {
    if (volteadas.length === 2) return; // Solo puede voltear dos cartas a la vez
    const nuevaCarta = cartas.map((carta) => {
      if (carta.id === id) {
        return { ...carta, volteada: true };
      }
      return carta;
    });
    setCartas(nuevaCarta);

    setVolteadas([...volteadas, id]);
  };

  // Comprobar si las dos cartas volteadas coinciden
  if (volteadas.length === 2) {
    const [carta1, carta2] = volteadas;
    const carta1Data = cartas.find((carta) => carta.id === carta1);
    const carta2Data = cartas.find((carta) => carta.id === carta2);
    if (carta1Data.valor !== carta2Data.valor) {
      setTimeout(() => {
        const nuevaCarta = cartas.map((carta) => {
          if (carta.id === carta1 || carta.id === carta2) {
            return { ...carta, volteada: false };
          }
          return carta;
        });
        setCartas(nuevaCarta);
        setVolteadas([]);
      }, 1500);
    } else {
      setVolteadas([]);
    }
  }

  return (
    <div className="tablero">
      {cartas.map((carta) => (
        <Carta
          key={carta.id}
          id={carta.id}
          imagen={carta.valor}
          volteada={carta.volteada}
          manejarClick={manejarClick}
        />
      ))}
    </div>
  );
};

// Genera un mazo de 8 cartas (4 pares) usando imágenes
const generateDeck = () => {
  const imagenes = [
      "gato.webp", "gallo.webp", "perro.png", "vaca.webp"
  ];
  let deck = [];
  
  // Creamos el mazo con 2 cartas por cada imagen
  imagenes.forEach((imagen, index) => {
    deck.push({ id: index * 2, valor: imagen, volteada: false });
    deck.push({ id: index * 2 + 1, valor: imagen, volteada: false });
  });
  
  // Mezclamos las cartas
  deck = deck.sort(() => Math.random() - 0.5);
  
  return deck;
};

export default Tablero;
