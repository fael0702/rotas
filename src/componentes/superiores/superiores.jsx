import React from 'react';

// Importar pacote link que é parte do react-router-dom
import { Link } from 'react-router-dom';

import '../app/App.css';

export default function Header() {
    return (
        <div className="menu03">            
            <nav>
                <ul>               
                    <li><Link class="menu-volta" to="../">Menu</Link></li>    
                    <li><Link class="voltar" to="muscular">Voltar</Link></li>
                    <li><Link class="primeiro">Bíceps</Link></li>
                    <li><Link class="segundo">Tricepis</Link></li>
                    <li><Link class="terceiro" to="cutaneos">Cutâneos</Link></li>
                    <li><Link class="quarto">Profundos</Link></li>                   
                </ul>
            </nav>          
        </div>
    )
};