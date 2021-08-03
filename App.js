import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Candes from './Candes';
import Cards from './Cards';
import Navbar from './Navbar';

const App =()=>{
  return(
    <>
    <Navbar/>
    <Switch>
        <Route  exact path="/" component ={Candes} />
        <Route path="/cards" component ={Cards} />
      </Switch>
    </>
  );
};

export default App;