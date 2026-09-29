//Codigo Original
// Archivo: src/Pie.jsx
function Pie() {
  return<footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';

//Codigo Corregido
// Archivo: src/Pie.jsx
export function Pie() {
  return <footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';
//Error: En Pie.jsx la función no está exportada, pero en App.jsx se intenta importar como exportación nombrada.