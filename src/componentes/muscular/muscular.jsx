import React from 'react';
import { Link } from 'react-router-dom';
import './muscular.css';
import '../app/App.css';


export default function Header() {
    return (
        <div className="menu02">            
            <nav>
                <ul>
                    <li><Link class="voltar" to="./">Voltar</Link></li>
                    <li><Link class="primeiro">Cabeça</Link></li>
                    <li><Link class="segundo">Pescoço</Link></li>
                    <li><Link class="terceiro">Tronco</Link></li>
                    <li><Link class="quarto" to="superiores">Superiores</Link></li>
                    <li><Link class="quinto">Inferiores</Link></li>
                </ul>
            </nav>   
            <div className="menu002"></div>
        </div>
    )
};