
import * as React from "react";
import { useState } from "react";

interface Pelicula {
  titulo: string;
  anio: number;
  genero: string;
}

const peliculas: Pelicula[] = [
  { titulo: "Titanic", anio: 1997, genero: "Romance" },
  { titulo: "Avatar", anio: 2009, genero: "Ciencia ficción" },
  { titulo: "Origen", anio: 2010, genero: "Ciencia ficción" },
  { titulo: "Shrek", anio: 2001, genero: "Animación" },
  { titulo: "Toy Story", anio: 1995, genero: "Animación" },
  { titulo: "El diario de Noa", anio: 2004, genero: "Romance" },
  { titulo: "Gladiator", anio: 2000, genero: "Acción" },
  { titulo: "John Wick", anio: 2014, genero: "Acción" },
];

function BuscadorPeliculas() {
  const [busqueda, setBusqueda] = useState<string>("");
  const [genero, setGenero] = useState<string>("Todos");

  function manejarTeclado(
    evento: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (evento.key === "Escape") {
      setBusqueda("");
    }
  }

  const peliculasFiltradas = peliculas.filter(
    pelicula =>
      pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
      (genero === "Todos" || pelicula.genero === genero)
  );

  function limpiarFiltros() {
    setBusqueda("");
    setGenero("Todos");
  }

  return (
    <div>
      <h2>Buscador de películas</h2>

      <input
        type="text"
        value={busqueda}
        onChange={evento => setBusqueda(evento.target.value)}
        onKeyDown={manejarTeclado}
        placeholder="Buscar película"
      />

      <select
        value={genero}
        onChange={evento => setGenero(evento.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Acción">Acción</option>
        <option value="Animación">Animación</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Romance">Romance</option>
      </select>

      <button onClick={limpiarFiltros}>
        Limpiar filtros
      </button>

      <p>{peliculasFiltradas.length} resultados</p>

      {peliculasFiltradas.length === 0 ? (
        <p>Sin resultados</p>
      ) : (
        <ul>
          {peliculasFiltradas.map(pelicula => (
            <li key={pelicula.titulo}>
              {pelicula.titulo} - {pelicula.anio} - {pelicula.genero}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BuscadorPeliculas;
