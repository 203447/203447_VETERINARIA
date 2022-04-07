import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Mascotas from './Mascotas';
import Duenios from './Dueños'
import Citas from './Citas';
import * as serviceWorker from './serviceWorker.js';
//import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import Home from './Home'
// Configuración de la rutas del Sitio Web 
ReactDOM.render(
  <Router>
    <div>
      <Switch>

          {/* Páginas */}
          <Route exact path='/' component={Home} />
          <Route path='/Mascotas' component={Mascotas} />
          <Route path='/Dueños' component={Duenios} />
          <Route path='/Citas' component={Citas} />
        </Switch>
    </div>
  </Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();