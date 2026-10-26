
import TarjetaLibro from './componentes/tarjeta-libro';
import ListaPrestamos from './componentes/lista-prestamos';

function App1() {
  return <ListaPrestamos />;
}
function App() {
  return (
    <div>
      <h1>Biblioteca</h1>

      <TarjetaLibro
        titulo="Dune"
        autor="Frank Herbert"
        estado="disponible"
        alPrestar={() => console.log('Libro prestado')}
      />

      <TarjetaLibro
        titulo="El Hobbit"
        autor="J. R. R. Tolkien"
        estado="prestado"
      />

      <TarjetaLibro
        titulo="1984"
        autor="George Orwell"
        estado="reservado"
      />
    </div>
  );
}

export default App;

// Errores de TypeScript que debes comprobar:
//
// estado="perdido": el estado no es válido.
// Falta titulo: la propiedad titulo es obligatoria.
