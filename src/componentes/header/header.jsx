import React from 'react';

// Importar pacote link que é parte do react-router-dom
import { Link } from 'react-router-dom';
import './header.css'
import '../app/App.css';

export default function Header() {
    return (
        <div className="menu">            
            <nav class="navmenu">
                <ul>
                    <li><Link class="primeiro" to="esqueletico">Esquelético</Link></li>
                    <li><Link class="segundo" to="articular">Articular</Link></li>
                    <li><Link class="terceiro" to="muscular">Muscular</Link></li>
                    <li><Link class="quarto" to="cardiovascular">Cardiovascular</Link></li>
                    <li><Link class="quinto" to="respiratorio">Respiratório</Link></li>
                </ul>
            </nav>    
            <div class="menu001"></div>      
        </div>
    )
};