import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import DigitalClock from './DigitalClock';

const root = ReactDOM.createRoot(document.getElementById('root'));

// babel-transpile each and everything into machine readable script
// webpack-bundles all the scripts and serve it to the browser container
root.render(
  <React.StrictMode>
    <DigitalClock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
