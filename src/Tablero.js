import { useState } from 'react';
import Carta from './Carta';
export default function Tablero() {
    return (
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-4">
                    <Carta />
                </div>
                <div class="col-lg-4">
                    <Carta />
                </div>
                <div class="col-lg-4">
                    <Carta />
                </div>
            </div>
        </div>
    )
}