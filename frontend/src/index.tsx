import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './defaults.css';
import Shop from './Shop';

// Optional: Pi SDK sandbox init
window.PiNetwork = {
  environment: 'sandbox'
};

ReactDOM.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>,
  document.getElementById("root")
);
