
import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  comprado: boolean;
}

function ListaCompra() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState<string>("");

  function anadirProducto() {
    if (nombre.trim() === "") {
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: nombre,
      comprado: false,
    };

    setProductos([...productos, nuevoProducto]);
    setNombre("");
  }

  function cambiarComprado(id: number) {
    setProductos(
      productos.map(producto =>
        producto.id === id
          ? { ...producto, comprado: !producto.comprado }
          : producto
      )
    );
  }

  function quitarProducto(id: number) {
    setProductos(productos.filter(producto => producto.id !== id));
  }

  const pendientes = productos.filter(
    producto => !producto.comprado
  ).length;

  return (
    <div>
      <h2>Lista de la compra</h2>

      <input
        type="text"
        value={nombre}
        onChange={evento => setNombre(evento.target.value)}
        placeholder="Escribe un producto"
      />

      <button onClick={anadirProducto}>Añadir</button>

      <p>Pendientes: {pendientes}</p>

      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <input
              type="checkbox"
              checked={producto.comprado}
              onChange={() => cambiarComprado(producto.id)}
            />

            <span
              style={{
                textDecoration: producto.comprado
                  ? "line-through"
                  : "none",
              }}
            >
              {producto.nombre}
            </span>

            <button onClick={() => quitarProducto(producto.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompra;
