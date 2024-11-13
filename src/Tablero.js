import { useState } from 'react';
import Carta from './Carta';
import 'bootstrap/dist/css/bootstrap.css';
export default function Tablero() {

    // La idea es definir un array de cartas, así les podemos poner distintas imágenes y posiblemente compararlas (espero).
    const [cartas] = useState([
        { id: 1, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 2, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 3, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 4, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 5, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 6, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 7, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
        { id: 8, anverso: "anverso.webp", reverso: "reverso.webp", volteada: true },
    ]);

    return (
        <div class="container pt-5">
            <div class="row">
                {cartas.map((carta) => (
                    <div class="col-lg-3">
                        <Carta
                            id={carta.id}
                            anverso={carta.anverso}
                            reverso={carta.reverso}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}