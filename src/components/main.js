import React from 'react';
import Home from './home';
import Projects from './projects';
import Contact from './contact';
import { Switch, Route } from 'react-router-dom'


 const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}/>

    <Route exact path="/Projects" component={Projects}/>
    

    <Route exact path="/Contact" component={Contact}/>

  </Switch>
  
 )
export default Main;