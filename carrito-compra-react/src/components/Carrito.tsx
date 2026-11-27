import { ItemCarrito, Producto } from "../types";
import { FilaCarrito } from "./FilaCarrito";

interface CarritoProps {
  carrito: ItemCarrito[];
  catalogo: Producto[];
  onIncrementar: (idProducto: string) => void;
  onDecrementar: (idProducto: string) => void;
  onEliminar: (idProducto: string) => void;
  onVaciar: () => void;
}

export function Carrito({
  carrito,
  catalogo,
  onIncrementar,
  onDecrementar,
  onEliminar,
  onVaciar,
}: CarritoProps) {
  if (carrito.length === 0) {
    return (
      <div className="bloque-carrito">
        <h2>Tu carrito</h2>
        <p className="carrito-vacio">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="bloque-carrito">
      <h2>Tu carrito</h2>
      <div className="lista-carrito">
        {carrito.map((item) => {
          const producto = catalogo.find((p) => p.id === item.idProducto);
          if (!producto) return null;

          return (
            <FilaCarrito
              key={item.idProducto}
              producto={producto}
              cantidad={item.cantidad}
              onIncrementar={onIncrementar}
              onDecrementar={onDecrementar}
              onEliminar={onEliminar}
            />
          );
        })}
      </div>

      <button type="button" className="btn-vaciar" onClick={onVaciar}>
        Vaciar carrito
      </button>
    </div>
  );
}
