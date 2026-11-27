import { Producto } from "../types";
import { formatearPrecio } from "../utils/formato";

interface TarjetaProductoProps {
  producto: Producto;
  cantidadEnCarrito: number;
  onAnadir: (idProducto: string) => void;
}

export function TarjetaProducto({
  producto,
  cantidadEnCarrito,
  onAnadir,
}: TarjetaProductoProps) {
  const sinStockInicial = producto.stock === 0;
  const sinMasUnidades = !sinStockInicial && cantidadEnCarrito >= producto.stock;
  const deshabilitado = sinStockInicial || sinMasUnidades;

  let textoBoton = "Añadir";
  if (sinStockInicial) {
    textoBoton = "Agotado";
  } else if (sinMasUnidades) {
    textoBoton = "Sin más unidades";
  }

  return (
    <article className="tarjeta-producto">
      <h3 className="tarjeta-titulo">{producto.nombre}</h3>
      <p className="tarjeta-precio">{formatearPrecio(producto.precio)}</p>
      <button
        type="button"
        className="btn-primario"
        disabled={deshabilitado}
        onClick={() => onAnadir(producto.id)}
      >
        {textoBoton}
      </button>
    </article>
  );
}
