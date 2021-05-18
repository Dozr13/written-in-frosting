import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import App from './App';
import { CakeProvider } from './Context/CakeCtx';
import Slider from './Components/Slider/Slider';
import images from './Components/Slider/images';
import './index.scss';

const Router = 
  process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;


ReactDOM.render(
  <Slider 
    slides={images}  
  />, 
  document.querySelector('.main'));


ReactDOM.render(
  <Router>
    <CakeProvider>
      <App />
    </CakeProvider>
  </Router>,
  document.getElementById('root')
);
