// unknown: Es un tipo que se utiliza cuando no sabemos qué dato tenemos. 
// Antes de utilizarlo, tenemos que comprobar su tipo.
let dato: unknown = 'Hola';

if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
}


// never: Es un tipo que se utiliza cuando una función nunca termina de forma normal o nunca devuelve un valor. 
// Por ejemplo, una función que siempre lanza un error.
function lanzarError(): never {
  throw new Error('Ha ocurrido un error');
}


// Diferencia: unknown puede contener cualquier tipo de dato, pero hay que comprobarlo antes de usarlo. 
// never representa algo que nunca ocurre, como una función que siempre lanza un error.