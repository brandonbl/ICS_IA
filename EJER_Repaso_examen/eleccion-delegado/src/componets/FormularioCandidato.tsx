import { useState, type FormEvent } from "react";
import type { Candidato } from "../tipos";

// Función que recibe la candidatura creada.
type Props = {
  alAñadir: (candidato: Candidato) => void;
};

export function FormularioCandidato({ alAñadir }: Props) {
  // Estados de los tres campos.
  const [nombre, setNombre] = useState("");
  const [numeroLista, setNumeroLista] = useState("");
  const [lema, setLema] = useState("");

  // Convertimos el número guardado como texto.
  const numero = Number(numeroLista);

  // Comprobamos si los datos son válidos.
  const esValido =
    nombre.trim() !== "" &&
    numeroLista.trim() !== "" &&
    Number.isInteger(numero) &&
    numero >= 1 &&
    numero <= 30;

  // Función que se ejecuta al enviar el formulario.
  function manejarEnvio(
    evento: FormEvent<HTMLFormElement>
  ): void {
    // Evitamos que se recargue la página.
    evento.preventDefault();

    // Si los datos no son válidos, no continuamos.
    if (!esValido) {
      return;
    }

    // Creamos el nuevo candidato.
    const nuevoCandidato: Candidato = {
      id: Date.now(),
      nombre: nombre.trim(),
      numeroLista: numero,
      votos: 0,

      // Añadimos el lema solo si se ha escrito.
      ...(lema.trim() !== ""
        ? { lema: lema.trim() }
        : {}),
    };

    // Enviamos el candidato a App.
    alAñadir(nuevoCandidato);

    // Vaciamos los campos.
    setNombre("");
    setNumeroLista("");
    setLema("");
  }

  return (
    <form
      className="formulario"
      onSubmit={manejarEnvio}
    >
      <h2>Nueva candidatura</h2>

      <div className="campo">
        <label htmlFor="nombre">Nombre</label>

        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) =>
            setNombre(evento.target.value)
          }
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="numeroLista">
          Número de lista (1 a 30)
        </label>

        <input
          id="numeroLista"
          type="number"
          min="1"
          max="30"
          step="1"
          value={numeroLista}
          onChange={(evento) =>
            setNumeroLista(evento.target.value)
          }
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="lema">Lema (opcional)</label>

        <input
          id="lema"
          type="text"
          value={lema}
          onChange={(evento) =>
            setLema(evento.target.value)
          }
        />
      </div>

      <button type="submit" disabled={!esValido}>
        Presentar candidatura
      </button>
    </form>
  );
}