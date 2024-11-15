import React from "react";
import "./styles.css";

const Carta = ({ id, imagen, volteada, manejarClick }) => {
  return (
    <div
      className={`carta ${volteada ? "volteada" : ""}`}
      onClick={() => manejarClick(id)}
    >
      {volteada ? (
        <img src={`/assets/${imagen}`} alt="carta" />
      ) : (
        <div className="carta-back">?</div>
      )}
    </div>
  );
};

export default Carta;