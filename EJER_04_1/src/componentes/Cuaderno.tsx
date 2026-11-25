import { useEffect, useReducer, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

interface Alumno { id: string; nombre: string; nota: number }
type Accion =
  | { tipo: "anadir"; id: string; nombre: string; nota: number }
  | { tipo: "cambiarNota"; id: string; nota: number }
  | { tipo: "eliminar"; id: string }
  | { tipo: "cargar"; alumnos: Alumno[] }
  | { tipo: "vaciar" };

function reductor(alumnos: Alumno[], accion: Accion): Alumno[] {
  switch (accion.tipo) {
    case "anadir":
      if (!accion.nombre.trim()) return alumnos;
      return [...alumnos, { id: accion.id, nombre: accion.nombre.trim(), nota: Math.min(10, Math.max(0, accion.nota)) }];
    case "cambiarNota":
      return alumnos.map(alumno => alumno.id === accion.id
        ? { ...alumno, nota: Math.min(10, Math.max(0, accion.nota)) } : alumno);
    case "eliminar":
      return alumnos.filter(alumno => alumno.id !== accion.id);
    case "cargar":
      return accion.alumnos;
    case "vaciar":
      return [];
  }
}

function esAlumno(valor: unknown): valor is Alumno {
  if (typeof valor !== "object" || valor === null) return false;
  const alumno = valor as Record<string, unknown>;
  return typeof alumno.id === "string" && typeof alumno.nombre === "string"
    && typeof alumno.nota === "number" && alumno.nota >= 0 && alumno.nota <= 10;
}
function esListaAlumnos(valor: unknown): valor is Alumno[] {
  return Array.isArray(valor) && valor.every(esAlumno);
}

interface PropsFormulario {
  alAnadir: (nombre: string, nota: number) => void;
}
function FormularioAlumno({ alAnadir }: PropsFormulario) {
  const [nombre, setNombre] = useState("");
  const [nota, setNota] = useState("5");
  const campoNombre = useRef<HTMLInputElement>(null);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alAnadir(nombre, Number(nota));
    setNombre("");
    setNota("5");
    campoNombre.current?.focus();
  }
  function teclado(e: KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Escape") {
      setNombre("");
      setNota("5");
      campoNombre.current?.focus();
    }
  }
  return <form onSubmit={enviar} onKeyDown={teclado}>
    <input ref={campoNombre} value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
    <input type="number" min="0" max="10" step="0.1" value={nota} onChange={e => setNota(e.target.value)} />
    <button type="submit">Añadir alumno</button>
  </form>;
}

function ListaAlumnos({ alumnos, alCambiar, alEliminar }: {
  alumnos: Alumno[]; alCambiar: (id: string, nota: number) => void; alEliminar: (id: string) => void;
}) {
  return <ul>{alumnos.map(alumno => <li key={alumno.id}>
    {alumno.nombre} - Nota: {alumno.nota}
    <input aria-label={`Nota de ${alumno.nombre}`} type="number" min="0" max="10" step="0.1"
      value={alumno.nota} onChange={e => alCambiar(alumno.id, Number(e.target.value))} />
    <button onClick={() => alEliminar(alumno.id)}>Eliminar</button>
  </li>)}</ul>;
}

function Resumen({ alumnos }: { alumnos: Alumno[] }) {
  const total = alumnos.length;
  const media = total ? alumnos.reduce((suma, alumno) => suma + alumno.nota, 0) / total : 0;
  const aprobados = alumnos.filter(alumno => alumno.nota >= 5).length;
  const mejor = alumnos.reduce<Alumno | null>((actual, alumno) =>
    actual === null || alumno.nota > actual.nota ? alumno : actual, null);
  const formato = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return <section>
    <p>Total: {total}</p><p>Media: {formato.format(media)}</p><p>Aprobados: {aprobados}</p>
    <p>Mejor alumno: {mejor ? `${mejor.nombre} (${mejor.nota})` : "Ninguno"}</p>
  </section>;
}

export default function Cuaderno() {
  const [alumnos, dispatch] = useReducer(reductor, []);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    document.title = `Cuaderno (${alumnos.length} alumnos)`;
    return () => { document.title = "Ejercicios EJER 04.1"; };
  }, [alumnos.length]);

  function anadir(nombre: string, nota: number) {
    dispatch({ tipo: "anadir", id: crypto.randomUUID(), nombre, nota });
  }
  async function cargarEjemplo() {
    setCargando(true);
    setError("");
    try {
      const respuesta = await fetch("/alumnos.json");
      if (!respuesta.ok) throw new Error("No se ha podido cargar el archivo.");
      const datos: unknown = await respuesta.json();
      if (!esListaAlumnos(datos)) throw new Error("El archivo JSON no tiene el formato correcto.");
      dispatch({ tipo: "cargar", alumnos: datos });
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : "Ha ocurrido un error.");
    } finally {
      setCargando(false);
    }
  }

  return <section>
    <FormularioAlumno alAnadir={anadir} />
    <button onClick={cargarEjemplo} disabled={cargando}>{cargando ? "Cargando…" : "Cargar ejemplo"}</button>
    <button onClick={() => dispatch({ tipo: "vaciar" })}>Vaciar lista</button>
    {error && <p className="error">{error}</p>}
    <ListaAlumnos alumnos={alumnos}
      alCambiar={(id, nota) => dispatch({ tipo: "cambiarNota", id, nota })}
      alEliminar={id => dispatch({ tipo: "eliminar", id })} />
    <Resumen alumnos={alumnos} />
  </section>;
}