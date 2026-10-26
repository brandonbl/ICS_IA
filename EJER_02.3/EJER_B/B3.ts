type EstadoPrestamo = "disponible" | "prestado" | "reservado"

type Libro = {
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


type Prestar = (alumno: string) => void;

type LibroPrestable = Libro & {
  prestar: Prestar;
};

const libro: LibroPrestable = {
      isbn: '12345',
  titulo: 'Dune',
  autor: 'Frank Herbert',
  anioPublicacion: 1965,
  estado: 'disponible',
  prestar(alumno){
    console.log(`${this.titulo} prestado a ${alumno}`)
  }
}
