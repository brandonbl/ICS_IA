//Codigo Original
export function Fecha() {
  const anioActual = new Date().getFullYear();
  return<p>Estamos en el año anioActual</p>;
}

//Codigo Corregido
export function Fecha() {
  const anioActual = new Date().getFullYear();
  return <p>Estamos en el año {anioActual}</p>;
}
//Error: anioActual está escrito como texto dentro del <p>.