// APARTADOS 4 y 5 · Estado, lista de notas y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.
import { useState } from "react";
import { notasIniciales } from "./datos";
import type { Nota } from "./tipos";
import { obtenerEstado } from "./utilidades";
import { ResumenNotas} from "./components/ResumenNotas";
import { FormularioNota } from "./components/FormularioNota";

function App() {
  const [nota, setNota] = useState<Nota[]>(notasIniciales);

  const calcularTotal = nota.reduce((total, notas) => total + notas.calificacion, 0)
  const notasAprobadas = nota.filter((notas) => notas.calificacion >= 5)
  const mediaNotas = calcularTotal / nota.length

  if(mediaNotas === 0){
    return "No se puede dividir entre 0"
  }
  function anadirNota(nota: Nota): void {
    setNota((listaAnterior) => [
      ...listaAnterior,
      nota,
    ]);
  }
  return (
    <main className="contenedor">
      <h1>Registro de notas</h1>
      {nota.length === 0? (
        <p className="vacio">
          todavia no hay notas
        </p>
      ): (
        <h2>Resumen del curso: {notasAprobadas}</h2>
      )}
        <ul className="lista-notas">
          <li key={nota}
        </ul>
      
      <p className="subtitulo">2.º DAW · Evaluación final</p>

      <FormularioNota
      alAñadir={añadirNotas}
      </FormularioNota>
    </main>
  );
}

export default App;
