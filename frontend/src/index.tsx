import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './defaults.css';
import Shop from './Shop'; // Make sure this is the actual component

window.PiNetwork = {
  environment: 'sandbox'
};

ReactDOM.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>,
  document.getElementById("root")
);
