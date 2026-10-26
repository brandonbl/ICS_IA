import { useState } from "react";

export function Contador({ etiqueta, valorInicial = 0 }) {
  const [valor, setValor] = useState(valorInicial);

  function manejarIncremento() {
    setValor(valor + 1);
  }

  function manejarDecremento() {
    setValor(valor - 1);
  }

  const manejarReinicio = () => {
    setValor(valorInicial);
  };

  return (
    <div>
      <h2>{etiqueta}: {valor}</h2>

      <button onClick={manejarIncremento}>+1</button>

      <button
        onClick={manejarDecremento}
        disabled={valor === 0}
      >
        -1
      </button>

      <button onClick={manejarReinicio}>Reiniciar</button>
    </div>
  );
}