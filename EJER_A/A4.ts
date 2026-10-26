type Libro = {
  titulo: string;
  paginas: number;
};

const respuesta: unknown = JSON.parse(
  '{"titulo": "Dune", "paginas": 412}'
);

function esLibro(valor: unknown): valor is Libro {
  if (typeof valor !== 'object' || valor === null) {
    return false;
  }

  if (!('titulo' in valor) || !('paginas' in valor)) {
    return false;
  }

  return (
    typeof valor.titulo === 'string' &&
    typeof valor.paginas === 'number'
  );
}

if (esLibro(respuesta)) {
  console.log(respuesta.titulo);
}