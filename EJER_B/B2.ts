type EstadoPrestamo = "disponible" | "prestado" | "reservado"

type Libro3 = {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number,
    estado: EstadoPrestamo
}

const libro1: Libro = {
  isbn: '978-84-376-0494-7',
  titulo: 'Don Quijote de la Mancha',
  autor: 'Miguel de Cervantes',
  anioPublicacion: 1605,
  paginas: 500,
  estado: 'disponible'
};

// Libro sin páginas
const libro2: Libro = {
  isbn: '978-84-376-0494-8',
  titulo: 'La Celestina',
  autor: 'Fernando de Rojas',
  anioPublicacion: 1499,
  estado: 'perdido'

};

// Porque 'perdido' no está entre los tres valores permitidos. 
// TypeScript muestra un error para evitar que usemos un estado no válido.