function calcularMedia(notas: number[]): number {
  let suma = 0;

  for (const nota of notas) {
    suma += nota;
  }

  return suma / notas.length;
}

// Error 1: media es string, pero calcularMedia devuelve number.
// Corrección: cambiar string por number.
const media: number = calcularMedia([6, 7, 8]);

// Error 2: '7' es un texto, pero el array solo admite números.
// Corrección: quitar las comillas.
calcularMedia([6, 7, 8]);

const hoy = new Date();

// Error 3: Date no tiene un método llamado sumarDias.
// Corrección: usar setDate para sumar 3 días.
hoy.setDate(hoy.getDate() + 3);

let aprobado = true;

// Error 4: aprobado es boolean, no puede recibir un texto.
// Corrección: asignar true o false.
aprobado = false;