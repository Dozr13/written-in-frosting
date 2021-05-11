import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Home from './Components/Home'
import Cakes from './Components/Cakes'
import Cupcakes from './Components/Cupcakes'


export default (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cakes' component={Cakes} />
      <Route path='/cupcakes' component={Cupcakes} />
    </Switch>
  </HashRouter>
)