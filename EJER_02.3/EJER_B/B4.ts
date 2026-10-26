// Creamos la interfaz Libro
interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  anioPublicacion: number;
  paginas?: number;
}

// Creamos LibroDigital, que hereda de Libro
interface LibroDigital extends Libro {
  tamanoMB: number;
}

// Creamos un libro digital
const libroDigital: LibroDigital = {
  isbn: '12345',
  titulo: 'Dune',
  autor: 'Frank Herbert',
  anioPublicacion: 1965,
  tamanoMB: 25
};

console.log(libroDigital);