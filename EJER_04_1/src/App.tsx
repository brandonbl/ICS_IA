import Contador from "./componentes/Contador";
import Carrito from "./componentes/Carrito";
import Reloj from "./componentes/Reloj";
import EjemplosSinEfecto from "./componentes/EjemplosSinEfecto";
import FormularioAcceso from "./componentes/FormularioAcceso";
import Cronometro from "./componentes/Cronometro";
import Cuaderno from "./componentes/Cuaderno";

export default function App() {
  return <main>
    <h1>Ejercicios EJER 04.1</h1>
    <h2>A1 · Contador</h2><Contador />
    <h2>A2 · Carrito</h2><Carrito />
    <h2>B1 · Relojes</h2><Reloj zonaHoraria="Europe/Madrid" /><Reloj zonaHoraria="America/Mexico_City" />
    <h2>B4 · ¿Necesito un efecto?</h2><EjemplosSinEfecto />
    <h2>C1 · Formulario de acceso</h2><FormularioAcceso />
    <h2>C2 · Cronómetro</h2><Cronometro />
    <h2>D · Cuaderno de notas</h2><Cuaderno />
  </main>;
}