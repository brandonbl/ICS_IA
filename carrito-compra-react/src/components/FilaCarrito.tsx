import { useState } from "react";
import { Producto } from "../types";
import { formatearPrecio } from "../utils/formato";

interface FilaCarritoProps {
  producto: Producto;
  cantidad: number;
  onIncrementar: (idProducto: string) => void;
  onDecrementar: (idProducto: string) => void;
  onEliminar: (idProducto: string) => void;
}

export function FilaCarrito({
  producto,
  cantidad,
  onIncrementar,
  onDecrementar,
  onEliminar,
}: FilaCarritoProps) {
  const [notaRegalo, setNotaRegalo] = useState("");

  const subtotalLinea = producto.precio * cantidad;
  const alcanzaStockMaximo = cantidad >= producto.stock;

  return (
    <div className="fila-carrito">
      <div className="fila-cabecera">
        <strong>{producto.nombre}</strong>
        <span className="fila-subtotal">{formatearPrecio(subtotalLinea)}</span>
      </div>

      <div className="fila-controles">
        <span className="fila-unitario">
          {formatearPrecio(producto.precio)} / ud.
        </span>

        <div className="grupo-cantidad">
          <button
            type="button"
            className="btn-cantidad"
            aria-label={`Disminuir cantidad de ${producto.nombre}`}
            onClick={() => onDecrementar(producto.id)}
          >
            −
          </button>
          <span className="cantidad-valor">{cantidad}</span>
          <button
            type="button"
            className="btn-cantidad"
            aria-label={`Aumentar cantidad de ${producto.nombre}`}
            disabled={alcanzaStockMaximo}
            onClick={() => onIncrementar(producto.id)}
          >
            +
          </button>
          <button
            type="button"
            className="btn-eliminar"
            onClick={() => onEliminar(producto.id)}
          >
            Eliminar
          </button>
        </div>
      </div>

      <input
        type="text"
        className="input-nota"
        placeholder="Nota para regalo"
        value={notaRegalo}
        onChange={(e) => setNotaRegalo(e.target.value)}
      />
    </div>
  );
}
