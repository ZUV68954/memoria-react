import React from "react";
import "./styles.css";

const Carta = ({id, imagen, volteada, manejarClick}) => {
    let contenido;

    if (volteada) {
        contenido = <img src={imagen} alt="carta"/>;
    } else {
        contenido = <div className="carta-back"/>;
    }

    return (
        <div className="carta" onClick={() => manejarClick(id)}>
            {contenido}
        </div>
    );
};

export default Carta;
