import React from 'react';

// Importar pacote link que é parte do react-router-dom
import { Link } from 'react-router-dom';

import '../app/App.css';

export default function Header() {
    return (
        <div className="menu04">            
            <nav>
                <ul>               
                    <li><Link class="menu-volta" to="../../">Menu</Link></li>    
                    <li><Link class="voltar" to="superiores">Voltar</Link></li>
                    <li><Link class="primeiro">Medial</Link></li>
                    <li><Link class="segundo">Lateral</Link></li>
                    <li><Link class="terceiro">Tendões</Link></li>
                    <li><Link class="quarto">Extensor</Link></li> 
                    <li><Link class="quinto">Rotadores</Link></li>                  
                </ul>
            </nav>          
        </div>
    )
};