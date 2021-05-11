import React from 'react';
import ViewProvider from './Context/ViewCtx'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './routes'

import {withRouter} from 'react-router-dom'

import './App.scss';


function App() {
  return (
    <ViewProvider>
      <Header />
        {routes}
      <Footer />
    </ViewProvider>
  );
}

export default withRouter(App);
