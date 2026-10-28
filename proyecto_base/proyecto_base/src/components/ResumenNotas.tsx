// APARTADO 3 · Componente ResumenNotas
// Ahora muestra datos fijos. Hay que convertirlo en un componente configurable mediante props.
import type { Nota, Estado } from "../tipos";

type Props = {
  nota: Nota
  estado: Estado
  titulo?: string,
  media: number,
  aprobadas: number
  total: number
};



export function ResumenNotas({
  titulo = "resumen",
  media,
  aprobadas,
  total
}: Props) {

  return (
    <section className="resumen">
      <h2>Resumen</h2>
      <p>
        titulo: {titulo}
      </p>
      <p>
        Nota media: {media}<strong>0.00</strong>
      </p>
      <p>Módulos aprobados: {aprobadas === total && (<p> Enhorabuena, todo aprobado</p>)}</p>
      <p>Módulos pendientes: {aprobadas !== total && (<p> Tienes modulos pendientes</p>)}</p>
    </section>
  );
}
