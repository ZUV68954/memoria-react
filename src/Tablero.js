import {useState} from 'react';
import Carta from './Carta';
import carta from './Carta';
import 'bootstrap/dist/css/bootstrap.css';

export default function Tablero() {

    // La idea es definir un array de cartas, así les podemos poner distintas imágenes y posiblemente compararlas (espero).
    const [cartas] = useState([
        {id: 1, anverso: "gallo.webp", reverso: "reverso.webp"},
        {id: 2, anverso: "vaca.webp", reverso: "reverso.webp"},
        {id: 3, anverso: "gallo.webp", reverso: "reverso.webp"},
        {id: 4, anverso: "gallo.webp", reverso: "reverso.webp"},
        {id: 1, anverso: "vaca.webp", reverso: "reverso.webp"},
        {id: 2, anverso: "burro.webp", reverso: "reverso.webp"},
        {id: 3, anverso: "gallo.webp", reverso: "reverso.webp"},
        {id: 4, anverso: "burro.webp", reverso: "reverso.webp"},
    ]);
    const [totalVolteadas, setTotalVolteadas] = useState([]);

    const comprobar = (id) => {
        if (totalVolteadas.length < 2) {
            setTotalVolteadas([...totalVolteadas, id]);
            // eslint-disable-next-line array-callback-return
            cartas.map((carta) => {
                if (carta.id === id) {
                    return {...carta, volteada: true};
                }
                return carta;
            });
        } else {
            iguales();
        }
    }

    const iguales = () => {
        if (totalVolteadas[0] === totalVolteadas[1]) {
            setTotalVolteadas([]);
        } else {
            return {...carta, volteada: false};
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
                            volteada={carta.volteada}
                            comprobar={comprobar}
                        />
                    </div>
                ))
                }
            </div>
            <div>
                <p>Están volteadas {totalVolteadas}</p>
            </div>
        </div>
    )
}