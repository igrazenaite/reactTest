import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {P} from './Modulis/Modulis';
//import Polygon from './Modulis/Modulis';
import Polygon, {P} from './Modulis/Modulis';

console.log(new Polygon().calcArea());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
