// export function Cabecera() {
//   const nombreModulo = "Desarrollo Web en Entorno Cliente";

//   return (
//     <header>
//       <h1>{nombreModulo}</h1>
//     </header>
//   );
// }

import { RelojEstatico } from "./RelojEstatico";

export function Cabecera() {
  const nombreModulo = "Desarrollo Web en Entorno Cliente";

  return (
    <header>
      <h1>{nombreModulo}</h1>
      <RelojEstatico />
    </header>
  );
}

//Observación:La hora no cambia sola mientras estamos mirando la página. Solo cambia cuando recargamos la página. Esto ocurre porque el componente calcula la hora cuando se renderiza y, como no hay ningún mecanismo que vuelva a renderizarlo automáticamente, el valor de la hora se mantiene hasta que la página se recarga.
