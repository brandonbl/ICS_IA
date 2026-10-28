// APARTADO 5 · Componente FormularioNota
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.

import { useState, type FormEvent } from "react";
import type { Nota } from "../tipos";

type Props = {
  alAñadir: (nota: Nota) => void;
}

export function FormularioNota() {

const [modulo, setModulo] = useState("")
const [calificacion, setCalificacion] = useState("")
const [observaciones, setObservaciones] = useState("")

const numero = Number(calificacion)

const esValido =
modulo.trim() !== "" &&
calificacion.trim() !== "" && 
Number.isInteger(numero) &&
numero >=0 &&
numero <=10

function manejarEnvio(
  evento: FormEvent<HTMLFormElement>
): void{
  evento.preventDefault()

  if (!esValido){
    return
  }
}

const nuevaNota: Nota = {
  id: Date.now(),

  ...(observaciones.trim() !== ""
? {observaciones: observaciones.trim()}: {})
}

alAñadir(nuevaNota)
setModulo("")
setCalificacion("")
setObservaciones("")


  return (
    <form className="formulario"
    onSubmit={manejarEnvio}>
      <h2>Añadir nota</h2>
      <div className="campo">
        <label htmlFor="modulo">Módulo</label>
        <input id="modulo" type="text" value = {modulo}
        onchange={(evento) => setModulo(addEventListener.target.value)} required/>
      </div>
      <div className="campo">
        <label htmlFor="calificacion">Calificación (0 a 10)</label>
        <input id="calificacion" type="number" min="0" max="10" step="0.1"
        value={calificacion} onChange={(evento) => setCalificacion(evento.target.value)} />
      </div>
      <div className="campo">
        <label htmlFor="observaciones">Observaciones (opcional)</label>
        <input id="observaciones" type="text" value={observaciones} onchange={(evento) => setObservaciones(evento.target.value)} />
      </div>
      <button type="submit">Añadir nota</button>
    </form>
  );
}
