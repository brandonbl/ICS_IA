import { useReducer } from "react";

interface Producto { id: number; nombre: string; precio: number }
interface LineaCarrito { producto: Producto; cantidad: number }
type Accion =
  | { tipo: "anadir"; producto: Producto }
  | { tipo: "quitar"; idProducto: number }
  | { tipo: "cambiarCantidad"; idProducto: number; cantidad: number }
  | { tipo: "vaciar" };

const productos: Producto[] = [
  { id: 1, nombre: "Teclado", precio: 25 },
  { id: 2, nombre: "Ratón", precio: 15 },
  { id: 3, nombre: "Monitor", precio: 150 },
  { id: 4, nombre: "Auriculares", precio: 35 }
];

function reductor(lineas: LineaCarrito[], accion: Accion): LineaCarrito[] {
  switch (accion.tipo) {
    case "anadir": {
      const existe = lineas.find(linea => linea.producto.id === accion.producto.id);
      if (existe) {
        return lineas.map(linea => linea.producto.id === accion.producto.id
          ? { ...linea, cantidad: linea.cantidad + 1 } : linea);
      }
      return [...lineas, { producto: accion.producto, cantidad: 1 }];
    }
    case "quitar":
      return lineas.filter(linea => linea.producto.id !== accion.idProducto);
    case "cambiarCantidad":
      if (accion.cantidad <= 0) {
        return lineas.filter(linea => linea.producto.id !== accion.idProducto);
      }
      return lineas.map(linea => linea.producto.id === accion.idProducto
        ? { ...linea, cantidad: accion.cantidad } : linea);
    case "vaciar":
      return [];
  }
}

const formatoEuro = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });

export default function Carrito() {
  const [lineas, dispatch] = useReducer(reductor, []);
  const articulos = lineas.reduce((total, linea) => total + linea.cantidad, 0);
  const total = lineas.reduce((suma, linea) => suma + linea.producto.precio * linea.cantidad, 0);

  return <section>
    <h3>Catálogo</h3>
    {productos.map(producto => <p key={producto.id}>
      {producto.nombre} - {formatoEuro.format(producto.precio)}
      <button onClick={() => dispatch({ tipo: "anadir", producto })}>Añadir</button>
    </p>)}
    <h3>Carrito ({articulos} artículos)</h3>
    {lineas.map(linea => <p key={linea.producto.id}>
      {linea.producto.nombre} x {linea.cantidad}
      <button onClick={() => dispatch({ tipo: "cambiarCantidad", idProducto: linea.producto.id, cantidad: linea.cantidad - 1 })}>-</button>
      <button onClick={() => dispatch({ tipo: "cambiarCantidad", idProducto: linea.producto.id, cantidad: linea.cantidad + 1 })}>+</button>
      <button onClick={() => dispatch({ tipo: "quitar", idProducto: linea.producto.id })}>Quitar</button>
    </p>)}
    <p>Total: {formatoEuro.format(total)}</p>
    <button onClick={() => dispatch({ tipo: "vaciar" })}>Vaciar carrito</button>
  </section>;
}