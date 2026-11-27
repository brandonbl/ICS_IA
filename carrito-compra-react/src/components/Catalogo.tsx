import { ItemCarrito, Producto } from "../types";
import { TarjetaProducto } from "./TarjetaProducto";

interface CatalogoProps {
  productos: Producto[];
  carrito: ItemCarrito[];
  onAnadir: (idProducto: string) => void;
}

export function Catalogo({ productos, carrito, onAnadir }: CatalogoProps) {
  return (
    <section className="seccion-catalogo">
      <h2>Catálogo</h2>
      <div className="grid-catalogo">
        {productos.map((producto) => {
          const item = carrito.find((i) => i.idProducto === producto.id);
          const cantidadEnCarrito = item ? item.cantidad : 0;

          return (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              cantidadEnCarrito={cantidadEnCarrito}
              onAnadir={onAnadir}
            />
          );
        })}
      </div>
    </section>
  );
}
