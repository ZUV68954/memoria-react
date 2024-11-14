import { useState } from 'react';
import Carta from './Carta';
import 'bootstrap/dist/css/bootstrap.css';
export default function Tablero() {

    // La idea es definir un array de cartas, así les podemos poner distintas imágenes y posiblemente compararlas (espero).
    const [cartas] = useState([
        { id: 1, anverso: "gallo.webp", reverso: "reverso.webp" },
        { id: 2, anverso: "vaca.webp", reverso: "reverso.webp" },
        { id: 3, anverso: "gallo.webp", reverso: "reverso.webp" },
        { id: 4, anverso: "gallo.webp", reverso: "reverso.webp" },
        { id: 5, anverso: "vaca.webp", reverso: "reverso.webp" },
        { id: 6, anverso: "burro.webp", reverso: "reverso.webp" },
        { id: 7, anverso: "gallo.webp", reverso: "reverso.webp" },
        { id: 8, anverso: "burro.webp", reverso: "reverso.webp" },
    ]);

    const [volteada, setVolteada] = useState(false);
    const [totalVolteadas, setTotalVolteadas] = useState(1);

    const comprobar = (id) => {
        if (volteada) {
            setVolteada(false);
            setTotalVolteadas(totalVolteadas + 1);
        }
        else {
            setVolteada(true);
            setTotalVolteadas(totalVolteadas - 1);
        }
    }

    return (
        <div class="container pt-5">
            <div class="row">
                {cartas.map((carta) => (
                    <div class="col-lg-3">
                        <Carta
                            id={carta.id}
                            anverso={carta.anverso}
                            reverso={carta.reverso}
                            comprobar={comprobar}
                        />
                    </div>
                ))
                }
            </div>
            <div>
                <p>Son un total de {totalVolteadas}</p>
            </div>
        </div>

    )
}