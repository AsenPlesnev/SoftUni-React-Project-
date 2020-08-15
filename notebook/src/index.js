import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
