import React from 'react';

import { Link } from 'react-router-dom';

import './respiratorio.css';

export default function Header() {
    return (                 
            <div class="menu">
                <nav class="navmenu">
                    <ul>
                    <li><Link class="primeiro" to="esqueletico">Esquelético</Link></li>
                    <li><Link class="segundo" to="articular">Articular</Link></li>
                    <li><Link class="terceiro" to="muscular">Muscular</Link></li>
                    <li><Link class="quarto" to="cardiovascular">Cardiovascular</Link></li>
                    <li><Link class="quinto" to="respiratorio">Respiratório</Link></li>
                    </ul>
                </nav>
                <div class="respiratorio">

                </div>
            </div>                 
    )
};