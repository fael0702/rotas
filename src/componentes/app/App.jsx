import React from 'react'
import './App.css';
import Header from '../header/header.jsx'
import Menu02 from '../muscular/muscular.jsx'
import Menu03 from '../superiores/superiores.jsx'
import Menu04 from '../cutaneos/cutaneos.jsx'
import Articular from '../articular/articular.jsx'
import Cardiovascular from '../cardiovascular/cardiovascular.jsx'
import Esqueletico from '../esqueletico/esqueletico'
import Respiratorio from '../respiratorio/respiratorio.jsx'
import { Route, Switch } from 'react-router';
//import { Link } from 'react-router-dom';
function App() {
  return (
    <div> 
      <main>
      <Switch>
          <Route exact path='/' render = {() => <Header/>}></Route>
          <Route exact path='/muscular' render = {() => <Menu02/>}></Route>
          <Route exact path='/superiores' render = {() => <Menu03/>}></Route>
          <Route exact path='/cutaneos' render = {() => <Menu04/>}></Route>
          <Route exact path='/articular' render = {() => <Articular/>}></Route>
          <Route exact path='/cardiovascular' render = {() => <Cardiovascular/>}></Route>
          <Route exact path='/esqueletico' render = {() => <Esqueletico/>}></Route>
          <Route exact path='/respiratorio' render = {() => <Respiratorio/>}></Route>
        </Switch>
      </main>     
    </div>
  );
}

export default App;
