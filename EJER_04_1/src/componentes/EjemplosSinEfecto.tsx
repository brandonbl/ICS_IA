import { useState, type FormEvent } from "react";

interface PropsResumen { nombre: string; apellidos: string }

function Resumen({ nombre, apellidos }: PropsResumen) {
  const nombreCompleto = `${nombre} ${apellidos}`;
  return <p>{nombreCompleto}</p>;
}

function Formulario() {
  const [nombre, setNombre] = useState("");
  function manejarEnvio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    guardarEnServidor({ nombre });
  }
  return <form onSubmit={manejarEnvio}>
    <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
    <button>Enviar</button>
  </form>;
}
function guardarEnServidor(datos: { nombre: string }) {
  console.log("Datos enviados:", datos);
}

function FichaAlumno({ idAlumno }: { idAlumno: string }) {
  const [comentario, setComentario] = useState("");
  return <div key={idAlumno}>
    <p>Alumno: {idAlumno}</p>
    <textarea value={comentario} onChange={e => setComentario(e.target.value)} />
  </div>;
}

export default function EjemplosSinEfecto() {
  return <section>
    <Resumen nombre="Ana" apellidos="García" />
    <Formulario />
    <FichaAlumno key="alumno-1" idAlumno="alumno-1" />
  </section>;
}