//Codigo Original
// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return<header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import Cabecera from './src/componentes/Cabecera';

//Codigo Corregido
// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return <header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import { Cabecera } from './src/componentes/Cabecera';
//Error: Se está haciendo una importación por defecto, pero Cabecera está exportada como exportación nombrada.
