//Base con la que viene la instalación
//Traigo la librería de React
import React from 'react';
//importa <algo> from 'ruta relativa/ruta paquete'.
//Librería reactdom
import ReactDOM from 'react-dom/client';

//Agarro una app que ya exista en react.
/* function App () {
  return 'Hola people'
} */
/* const App = () => 'Hola people con JSX' */

import App from './App';

//Muestro la app en el DOM
//Crea un punto inicial (root) en donde la app se va a mostrar (dibujar). Lo busca en el DOM del HTML.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
