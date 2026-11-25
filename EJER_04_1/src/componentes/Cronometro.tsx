import { useEffect, useRef, useState } from "react";

export default function Cronometro() {
  const [decimas, setDecimas] = useState(0);
  const [vueltas, setVueltas] = useState<number[]>([]);
  const [activo, setActivo] = useState(false);
  const intervalo = useRef<number | null>(null);

  function parar() {
    if (intervalo.current !== null) {
      window.clearInterval(intervalo.current);
      intervalo.current = null;
    }
    setActivo(false);
  }

  function iniciar() {
    if (intervalo.current !== null) return;
    intervalo.current = window.setInterval(() => setDecimas(anterior => anterior + 1), 100);
    setActivo(true);
  }

  function reiniciar() {
    parar();
    setDecimas(0);
    setVueltas([]);
  }

  useEffect(() => () => {
    if (intervalo.current !== null) window.clearInterval(intervalo.current);
  }, []);

  const minutos = Math.floor(decimas / 600);
  const segundos = Math.floor((decimas % 600) / 10);
  const decima = decimas % 10;
  const tiempo = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}.${decima}`;

  return <section>
    <h3>{tiempo}</h3>
    <button onClick={iniciar} disabled={activo}>Iniciar</button>
    <button onClick={parar} disabled={!activo}>Parar</button>
    <button onClick={() => setVueltas(anteriores => [...anteriores, decimas])} disabled={!activo}>Vuelta</button>
    <button onClick={reiniciar}>Reiniciar</button>
    <ol>{vueltas.map((vuelta, indice) => {
      const min = Math.floor(vuelta / 600);
      const seg = Math.floor((vuelta % 600) / 10);
      return <li key={indice}>{String(min).padStart(2, "0")}:{String(seg).padStart(2, "0")}.{vuelta % 10}</li>;
    })}</ol>
  </section>;
}