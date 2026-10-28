import type { Estado } from "./tipos";

// Recibe los votos del candidato y el máximo de votos.
export function obtenerEstado(
  votos: number,
  maximo: number
): Estado {

  // Si no tiene votos, todavía no ha recibido ninguno.
  if (votos === 0) {
    return "ninguno";
  }

  // Si tiene los mismos votos que el máximo, va en cabeza.
  if (votos === maximo) {
    return "lider";
  }

  // Si tiene votos, pero menos que el máximo.
  return "algunos";
}