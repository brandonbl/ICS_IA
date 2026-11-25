import { useState } from "react";

export default function Contador() {
  const [cuenta, setCuenta] = useState(0);

  function manejarSumarTres() {
    setCuenta(anterior => anterior + 3);
    console.log("Se ha pulsado Sumar 3. Valor anterior:", cuenta);
  }

  function manejarDuplicar() {
    setCuenta(cuenta + 1);
    setCuenta(anterior => anterior * 2);
  }

  return <section>
    <h3>{cuenta}</h3>
    <button onClick={manejarSumarTres}>Sumar 3</button>
    <button onClick={manejarDuplicar}>Duplicar</button>
  </section>;
}