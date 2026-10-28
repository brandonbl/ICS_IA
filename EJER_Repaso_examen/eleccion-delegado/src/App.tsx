import { useState } from "react";
import { candidatosIniciales } from "./datos";
import type { Candidato } from "./tipos";
import { obtenerEstado } from "./utilidades";
import { TarjetaCandidato } from "./componets/TarjetaCandidato";
import { FormularioCandidato } from "./componets/FormularioCandidato";

export function App() {
  // Guardamos la lista de candidatos en un estado.
  const [candidatos, setCandidatos] =
    useState<Candidato[]>(candidatosIniciales);

  // Sumamos los votos de todos los candidatos.
  const totalVotos = candidatos.reduce(
    (total, candidato) => total + candidato.votos,
    0
  );

  // Calculamos el número más alto de votos.
  // Si no hay candidatos, el resultado será 0.
  const maximo = Math.max(
    0,
    ...candidatos.map((candidato) => candidato.votos)
  );

  // Apartado 4: función para votar.
  function votar(id: number): void {
    setCandidatos((listaAnterior) =>
      listaAnterior.map((candidato) =>
        candidato.id === id
          ? { ...candidato, votos: candidato.votos + 1 }
          : candidato
      )
    );
  }

  // Apartado 5: función para añadir un candidato.
  function anadirCandidato(candidato: Candidato): void {
    setCandidatos((listaAnterior) => [
      ...listaAnterior,
      candidato,
    ]);
  }

  return (
    <main>
      <h1>Elección de delegado/a</h1>

      <p>Votos emitidos: {totalVotos}</p>

      {candidatos.length === 0 ? (
        <p className="vacio">
          Todavía no hay candidaturas.
        </p>
      ) : (
        <section className="lista-candidatos">
          {candidatos.map((candidato) => (
            <TarjetaCandidato
              key={candidato.id}
              candidato={candidato}
              estado={obtenerEstado(
                candidato.votos,
                maximo
              )}
              alVotar={votar}
            />
          ))}
        </section>
      )}

      <FormularioCandidato
        alAñadir={anadirCandidato}
      />
    </main>
  );
}

export default App;