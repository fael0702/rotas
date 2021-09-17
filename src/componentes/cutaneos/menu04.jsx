import React from 'react';
import {Route, Switch} from "react-router-dom";
import './cutaneos.css';
import Header from './cutaneos.jsx'

export default function menu04() {
    return (    
        <div>
            <div className="menu004">
               <Switch><Route exact path="/cutaneos" render={() => <Header/>} ></Route></Switch>
            </div>

        </div>
    )
};