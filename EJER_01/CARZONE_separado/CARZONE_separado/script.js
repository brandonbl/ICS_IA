// ============================================================
// CARZONE - script.js
// JavaScript puro, sin librerías externas.
// ============================================================

// ---------- 1. Tarjetas interactivas "¿Qué buscas?" ----------
// Al hacer clic en cualquiera de las tarjetas (.tarjeta-busqueda)
// se muestra un alert() con su título y su descripción.
document.querySelectorAll('.tarjeta-busqueda').forEach((tarjeta) => {
  tarjeta.addEventListener('click', () => {
    const titulo = tarjeta.querySelector('h3').textContent.trim();
    const desc = tarjeta.querySelector('p').textContent.trim();
    alert(titulo + ': ' + desc);
  });
});

// ---------- 2. Formulario de contacto ----------
// El formulario no se envía a ningún servidor: solo se comprueba
// visualmente, se muestra un mensaje y se limpian los campos.
const formularioContacto = document.querySelector('.contenedor-contacto form');

if (formularioContacto) {
  formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    alert('¡Gracias por contactar con CARZONE! Te responderemos muy pronto.');
    formularioContacto.reset();
  });
}
