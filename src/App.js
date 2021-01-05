import React, { useState, Fragment } from "react";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import ShowSong from "./ShowSong";
import InputList from "./InputList";

function App(){
  return(
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/showSong" component={ShowSong} />
        <Route path="/addSong" component={InputList} />
      </Switch>
    </Router>
    
    
  )
}

export default App;