// EJERCICIO 1
// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}

/*1. App.jsx: El error es que la etiqueta <Saludo> no está cerrada correctamente. 
Esto provoca un error de sintaxis en JSX y no permite compilar la aplicación. Se corrige cerrando la etiqueta con />.

2. Saludo.jsx: El error es que se utiliza una exportación nombrada (export function Saludo), pero en App.jsx se importa como una exportación por defecto. Esto provoca un error al importar el componente. 
Se corrige añadiendo llaves en la importación: import { Saludo } from "./Saludo";. */
// CORREGIDO
import { Saludo } from "./Saludo";

function App() {
  return (
    <div>
      <Saludo nombre="Carlos" />
    </div>
  );
}

export default App;

// EJERCICIO 2
export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}
/*El error está en que se intenta modificar directamente la variable encendido dentro del onClick. 
En React, el estado no se debe modificar directamente, sino mediante la función setEncendido. Además, falta importar useState desde React.

Esto provoca que el estado no se actualice correctamente y que el botón no cambie su texto como se espera. */
// CORREGIDO
import { useState } from "react";

export function Interruptor() {
  const [encendido, setEncendido] = useState(false);

  return (
    <button onClick={() => setEncendido(!encendido)}>
      {encendido ? "Apagar" : "Encender"}
    </button>
  );
}

// EJERCICIO 3
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}
/**El error está en que onClick ejecuta directamente la función setValor(valor + 1) al renderizar el componente, 
 * en lugar de ejecutarla cuando se pulsa el botón. 
 * Esto provoca que el contador intente actualizarse continuamente y no funcione correctamente.

Se corrige utilizando una función flecha dentro de onClick para que el estado solo cambie al pulsar el botón. 
También hay que importar useState desde React. */

// CORREGIDO
import { useState } from "react";

export function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <button onClick={() => setValor(valor + 1)}>
      Pulsado {valor} veces
    </button>
  );
}

// EJERCICIO 4
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

/**El código no presenta ningún error en la lógica del contador, pero falta importar useState desde React. 
 * Esto provoca un error porque React no reconoce el hook y el componente no puede ejecutarse correctamente. */

// CORREGIDO
import { useState } from "react";

export function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <button onClick={() => setValor(valor + 1)}>
      {valor}
    </button>
  );
}

// EJERCICIO 5
export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

/**El error está en que se utiliza el componente <BotonEnviar /> sin pasarle la propiedad onEnviar. 
 * Cuando se pulsa el botón, se ejecuta onEnviar(), pero como no se ha definido, se produce un error porque no es una función. */

// CORREGIDO
export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }

  return <button onClick={manejarClic}>Enviar</button>;
}

import { BotonEnviar } from "./BotonEnviar";

function App() {
  function enviar() {
    alert("Formulario enviado");
  }

  return <BotonEnviar onEnviar={enviar} />;
}

// export default App;

// EJERCICIO 6
export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
/**El error está en la condición mensajesNuevos &&. 
 * Cuando el valor de mensajesNuevos es 0, React muestra un 0 en pantalla en lugar de no mostrar nada. 
 * Además, falta importar useState desde React. */
//CORREGIDO
import { useState } from "react";

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);

  return (
    <div>
      {mensajesNuevos > 0 && (
        <p>Tienes {mensajesNuevos} mensajes nuevos</p>
      )}
    </div>
  );
}

