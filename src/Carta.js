import React, { useState } from "react";

function Carta() {
    // onclick cambia la variable o la ruta de la variable
    const [cara, setCara] = useState(true);
    const [nombreImagen, setNombreImagen] = useState("reverso.webp");

    const cambio = () => {
        if (cara) {
            setNombreImagen("reverso.webp");
        }
        else {
            setNombreImagen("anverso.webp");
        }
        setCara(!cara);
    }

    return <img src={nombreImagen} onClick={cambio} alt=""></img>
}
export default Carta;