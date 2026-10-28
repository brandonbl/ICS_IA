// APARTADO 1 · Tipos
// Escribe aquí los tipos `Nota` y `Resultado` (consulta el enunciado).

export type Nota = {
  id: number;
  modulo: string;
  calificacion: number;
  observaciones?:string
};

export type Estado = "suspenso" | "aprobado" | "notable" | "sobresaliente";
