import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Carta({ id, anverso, reverso, volteada }) {
    // onclick cambia la variable o la ruta de la variable
    const [cara, setCara] = useState(true);
    const [nombreImagen, setNombreImagen] = useState(reverso);

    const cambio = () => {
        if (cara) {
            setNombreImagen(reverso);
        }
        else {
            setNombreImagen(anverso);
        }
        setCara(!cara);
    }

    // Por alguna razón el primer click no funciona, así que llamo una única vez al click y ahora ya funciona el primer click :).
    useEffect(() => {
        cambio();
    }, []);

    return <img src={nombreImagen} onClick={cambio} alt="" class="border border-primary img-fluid mb-2" id={id}></img>
}

export default Carta;