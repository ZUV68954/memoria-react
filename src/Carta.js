import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Carta({id, anverso, reverso, comprobar, volteada}) {
    // onclick cambia la variable o la ruta de la variable
    let nombreImagen;
    if (volteada) {
        nombreImagen = anverso;
    } else {
        nombreImagen = reverso;
    }
    /*useEffect(() => {
        if (volteada) {
            setNombreImagen(anverso);
        } else {
            setNombreImagen(reverso);
        }
    }, [volteada, anverso, reverso]);*/


    return <img src={nombreImagen} onClick={() => comprobar(id)} alt="" class="border border-primary img-fluid mb-2"
                id={id}></img>
}

export default Carta;