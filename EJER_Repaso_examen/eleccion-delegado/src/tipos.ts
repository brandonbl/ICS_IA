// Definimos los datos que tiene cada candidato.
export type Candidato = {
  id: number;
  nombre: string;
  numeroLista: number;
  votos: number;
  lema?: string;
};

// Definimos los tres estados posibles de una candidatura.
export type Estado = "ninguno" | "algunos" | "lider";