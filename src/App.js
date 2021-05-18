import React from 'react';
import ViewProvider from './Context/ViewCtx'
import Nav from './Components/Header/Nav/NavBar'
import Footer from './Components/Footer/Footer';
import routes from './routes'

import {withRouter} from 'react-router-dom'

import './App.scss';


function App() {
  return (
    <ViewProvider>
        <Nav />
          {routes}
        <Footer />
    </ViewProvider>
  );
}

export default withRouter(App);
