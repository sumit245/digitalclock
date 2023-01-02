import React from 'react';
import ReactDOM from 'react-dom/client';
import Feature1 from './components/ChangingBackground';
import Feature2 from './Feature2';
import reportWebVitals from './reportWebVitals';
import App from './components/Counter'
import Feature4 from './Feature4';
import Autocomplete from './components/Autocomplete';


const root = ReactDOM.createRoot(document.getElementById('root'));

// babel-transpile each and everything into machine readable script
// webpack-bundles all the scripts and serve it to the browser container
root.render(
  <React.StrictMode>
    <App />
    {/* <Feature1 /> */}
    {/* <Feature2 /> */}
    {/* <App/>
     */}
    {/* <Feature4 /> */}
    {/* <Chang */}
    {/* <Autocomplete /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
