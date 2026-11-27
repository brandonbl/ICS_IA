import { useState } from "react";
import { catalogo } from "./data/catalogo";
import { ItemCarrito } from "./types";
import { Catalogo } from "./components/Catalogo";
import { Carrito } from "./components/Carrito";
import { ResumenCarrito } from "./components/ResumenCarrito";
import "./App.css";

const UMBRAL_ENVIO_GRATIS = 50;
const COSTE_ENVIO = 4.95;

export function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  const anadir = (idProducto: string) => {
    const producto = catalogo.find((p) => p.id === idProducto);
    if (!producto || producto.stock <= 0) return;

    setCarrito((prev) => {
      const existente = prev.find((item) => item.idProducto === idProducto);
      if (existente) {
        if (existente.cantidad >= producto.stock) return prev;
        return prev.map((item) =>
          item.idProducto === idProducto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { idProducto, cantidad: 1 }];
    });
  };

  const incrementar = (idProducto: string) => {
    anadir(idProducto);
  };

  const decrementar = (idProducto: string) => {
    setCarrito((prev) =>
      prev.flatMap((item) => {
        if (item.idProducto !== idProducto) return [item];
        if (item.cantidad <= 1) return [];
        return [{ ...item, cantidad: item.cantidad - 1 }];
      })
    );
  };

  const eliminar = (idProducto: string) => {
    setCarrito((prev) => prev.filter((item) => item.idProducto !== idProducto));
  };

  const vaciar = () => {
    setCarrito([]);
  };

  const confirmarPedido = () => {
    alert("¡Pedido confirmado!");
    vaciar();
  };

  const unidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const subtotal = carrito.reduce((acc, item) => {
    const producto = catalogo.find((p) => p.id === item.idProducto);
    return acc + (producto ? producto.precio * item.cantidad : 0);
  }, 0);

  const envio = subtotal >= UMBRAL_ENVIO_GRATIS ? 0 : COSTE_ENVIO;
  const total = subtotal + envio;

  return (
    <main className="contenedor-app">
      <h1>Carrito de la compra</h1>

      <div className="layout-principal">
        <Catalogo
          productos={catalogo}
          carrito={carrito}
          onAnadir={anadir}
        />

        <div className="columna-derecha">
          <Carrito
            carrito={carrito}
            catalogo={catalogo}
            onIncrementar={incrementar}
            onDecrementar={decrementar}
            onEliminar={eliminar}
            onVaciar={vaciar}
          />

          {carrito.length > 0 && (
            <ResumenCarrito
              unidades={unidades}
              subtotal={subtotal}
              envio={envio}
              total={total}
              umbralEnvioGratis={UMBRAL_ENVIO_GRATIS}
              onConfirmarPedido={confirmarPedido}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
