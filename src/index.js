//ARCHIVO DE ENTRADA

//1.IMPORTACIONES
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//a) importacion de componenetes
import App from './App';
//de momento no lo usamos
import reportWebVitals from './reportWebVitals';

//RENDERIZADO
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
