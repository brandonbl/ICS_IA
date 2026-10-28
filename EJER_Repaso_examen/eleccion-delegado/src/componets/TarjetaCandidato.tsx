import type { Candidato, Estado } from "../tipos";

// Definimos las propiedades que recibe la tarjeta.
type Props = {
  candidato: Candidato;
  estado: Estado;
  textoBoton?: string;
  alVotar: (id: number) => void;
};

export function TarjetaCandidato({
  candidato,
  estado,
  textoBoton = "Votar",
  alVotar,
}: Props) {
  return (
    <article className={`tarjeta tarjeta--${estado}`}>
      <h2>{candidato.nombre}</h2>

      <p>Número de lista: {candidato.numeroLista}</p>

      <p>Votos: {candidato.votos}</p>

      {estado === "lider" && (
        <p>👑 Va en cabeza</p>
      )}

      {estado === "ninguno" && (
        <p>Todavía sin votos</p>
      )}

      {candidato.lema && (
        <p>Lema: {candidato.lema}</p>
      )}

      <button
        type="button"
        onClick={() => alVotar(candidato.id)}
      >
        {textoBoton}
      </button>
    </article>
  );
}