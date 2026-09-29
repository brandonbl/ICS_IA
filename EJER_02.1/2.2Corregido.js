//Codigo Original
export function Tarjeta() {
  // return (
  //   // <h2>Desarrollo Web en Entorno Cliente</h2>
  //   // <p>Segundo curso de DAW</p>
  // );
}

//Codigo Corregido
export function Tarjeta() {
  return (
    <>
      <h2>Desarrollo Web en Entorno Cliente</h2>
      <p>Segundo curso de DAW</p>
    </>
  );
}

//Error: El componente intenta devolver dos elementos (<h2> y <p>) al mismo nivel sin envolverlos en un elemento padre o Fragment.
