import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './muscular/muscular.jsx'

export default function menu02() {
    return (
        <div>           
            <div >
               <Switch><Route exact path="/muscular" render={() => <Header/>}></Route></Switch>

            </div>
            <div className="menu002"></div>

        </div>
    )
};