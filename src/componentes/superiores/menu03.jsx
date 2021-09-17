import React from 'react';

import {Route, Switch} from "react-router-dom";
import './superiores.css';
import Header from './superiores.jsx'

export default function menu03() {
    return (    
        <div>
            <div className="menu003">
               <Switch><Route exact path="/superiores" render={() => <Header/>} ></Route></Switch>
            </div>
                 
        </div>
    )
};