import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Carta({ id, anverso, reverso, comprobar }) {
    // onclick cambia la variable o la ruta de la variable
    const [volteada, setCara] = useState(false);
    const [nombreImagen, setNombreImagen] = useState(reverso);

    const cambio = () => {
        if (volteada) {
            setNombreImagen(anverso);
        }
        else {
            setNombreImagen(reverso);
        }
        setCara(!volteada);
        comprobar(id);
    }

    // Por alguna razón el primer click no funciona, así que llamo una única vez al click y ahora ya funciona el primer click :).
    useEffect(() => {
        cambio();
    }, []);



    return <img src={nombreImagen} onClick={cambio} alt="" class="border border-primary img-fluid mb-2" id={id}></img>
}

export default Carta;