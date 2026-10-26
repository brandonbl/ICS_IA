type Libro2 = {
    isbn: string,
    titulo: string,
    autor: string,
    anioPublicacion: number,
    paginas?: number
}

const libro1: Libro = {
  isbn: '978-84-376-0494-7',
  titulo: 'Don Quijote de la Mancha',
  autor: 'Miguel de Cervantes',
  anioPublicacion: 1605,
  paginas: 500
};

// Libro sin páginas
const libro2: Libro = {
  isbn: '978-84-376-0494-8',
  titulo: 'La Celestina',
  autor: 'Fernando de Rojas',
  anioPublicacion: 1499
};

// libro1.editorial = "anaya" //Error
// Porque la propiedad editorial no está definida en el tipo Libro. 
// TypeScript no permite añadir propiedades que no estén declaradas en ese tipo.